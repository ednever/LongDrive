import { useEffect, useState, useRef } from 'react';
import './CarAnimation.css';
import backgroundCarImg from './images/bg.gif';
import backgroundTruckImg from './images/tripToCity.gif';
import truckImg from './images/truckFromBehind.png';

function ManguDrive() {  
    const carHavePicture = localStorage.getItem('autoType');
    const carId = localStorage.getItem('autoId');
    const tellimusId = localStorage.getItem('tellimusId');
    const tellimusAeg = localStorage.getItem('tellimusAeg');

    const [soiduAuto, setSoiduAuto] = useState(null);
    const [seconds, setSeconds] = useState(Number(tellimusAeg));
    const [isActive, setIsActive] = useState(true);
    var CarImgRef = useRef('');
    var BgImgRef = useRef('');

    const handleBackButtonClick = () => {
      window.history.back();
    };

    const [leftPosition, setLeftPosition] = useState(300);
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

    async function updateTellimusAndGoBack() {
      await fetch('https://localhost:7101/Tellimus/muuda/' + tellimusId, { method: "PUT", headers: { "Content-Type": "application/json"}});    
      window.history.back();
    }


    useEffect(() => {
      let interval;

      if (carHavePicture === 'true') {
        fetch("https://localhost:7101/Soiduauto/" + carId)
          .then(res => res.json())
          .then(json => setSoiduAuto(json));
      } 
      else if (carHavePicture === "false")
      {
        if (isActive && seconds > 0) 
        {
          interval = setInterval(() => { setSeconds(seconds - 1); }, 1000);
        } 
        else if (seconds === 0) 
        {
          clearInterval(interval);
          alert('Заказ доставлен');
          updateTellimusAndGoBack();
        }
      }   

      document.body.style.overflow = "hidden";  
      document.addEventListener("keydown", handleKeyDown);
      
      return () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", handleKeyDown);

        if (carHavePicture === "false"){
          clearInterval(interval);
        }
      };

    }, [isActive, seconds]);



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

    function formatTime(secs) {
      const minutes = Math.floor(secs / 60);
      const remainingSeconds = secs % 60;
      return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    return (
      
      <div className="container" onKeyDown={handleKeyDown}>
        <button onClick={handleBackButtonClick} className="back-button">Назад</button>
        {carHavePicture === "false" && <div className="overlay">{formatTime(seconds)}</div>}
        <img src={BgImgRef} className="background" alt="Background" />
        <div className="car-object" style={{ left: `${leftPosition}px` }}>
          <img src={CarImgRef} alt="Car" width="400"/>
        </div>
        <div style={{ left: leftPosition + "px" }} className="object"></div>
        <button onMouseDown={startMovingLeft} onMouseUp={stopMoving} className="pedal left-pedal">Влево</button>
        <button onMouseDown={startMovingRight} onMouseUp={stopMoving} className="pedal right-pedal">Вправо</button>
      </div>
    );

}
export default ManguDrive;