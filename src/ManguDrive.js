import { useEffect, useState, useRef } from 'react';
import './CarAnimation.css';
import backgroundCarImg from './images/bg.gif';
import backgroundTruckImg from './images/tripToCity.gif';
import truckImg from './images/truckFromBehind.png';

function ManguDrive() {  
    const carHavePicture = localStorage.getItem('autoType');
    const carId = Number(localStorage.getItem('autoId'));

    const [soiduAuto, setSoiduAuto] = useState(null);
    var CarImgRef = useRef('');
    var BgImgRef = useRef('');


    const [leftPosition, setLeftPosition] = useState(0);
    const animationFrameRef = useRef(null);

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          startMovingLeft();
          break;
        case "ArrowRight":
          startMovingRight();
          break;
        default:
          break;
      }
    };


    useEffect(() => {
      fetch("https://localhost:7101/Soiduauto/" + JSON.stringify(carId))
        .then(res => res.json())
        .then(json => setSoiduAuto(json)); 

      document.body.style.overflow = "hidden";  
      document.addEventListener("keydown", handleKeyDown);
      
      return () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", handleKeyDown);
      };

    }, []);



    if (carHavePicture === 'true' && soiduAuto != null) {
      CarImgRef = soiduAuto.pilt;
      BgImgRef = backgroundCarImg;
    } else {
      CarImgRef = truckImg;
      BgImgRef = backgroundTruckImg;
    } 


    const startMovingLeft = () => {
      cancelAnimationFrame(animationFrameRef.current);
      const move = () => {
        setLeftPosition((prevPosition) => prevPosition - 3);
        animationFrameRef.current = requestAnimationFrame(move);
      };
      move();
    };
  
    const startMovingRight = () => {
      cancelAnimationFrame(animationFrameRef.current);
      const move = () => {
        setLeftPosition((prevPosition) => prevPosition + 3);
        animationFrameRef.current = requestAnimationFrame(move);
      };
      move();
    };
  
    const stopMoving = () => {
      cancelAnimationFrame(animationFrameRef.current);
    };

    return (
      <div className="container" onKeyDown={handleKeyDown}>
        <img src={BgImgRef} className="background" alt="Background" />
        <div className="car-object" style={{ left: `${leftPosition}px` }}>
          <img src={CarImgRef} alt="Car" width="400"/>
        </div>
        <div style={{ left: leftPosition + "px" }} className="object"></div>
        <button onMouseDown={startMovingLeft} onMouseUp={stopMoving} className="pedal left-pedal">Тормоз</button>
        <button onMouseDown={startMovingRight} onMouseUp={stopMoving} className="pedal right-pedal">Газ</button>
      </div>
    );

}
export default ManguDrive;