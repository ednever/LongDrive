import { useEffect, useState, useRef } from 'react';
import './CarAnimation.css';
import bgg from './images/bkcc.jpg';
import w211 from './images/w211.png';

function ManguDrive() {  
    const carHavePicture = localStorage.getItem('autoType');
    const carId = Number(localStorage.getItem('autoId'));

    const [leftPosition, setLeftPosition] = useState(0);
    const [soiduAuto, setSoiduAuto] = useState(null);
    var piltRef = useRef('');

    //const [carImage, setCarImage] = useState(null);     

    useEffect(() => {
      fetch("https://localhost:7101/Soiduauto/" + JSON.stringify(carId))
        .then(res => res.json())
        .then(json => setSoiduAuto(json));
      w211 = require('./images/w211.png');  
      
      /*const loadImage = async () => {
        const image = new Image();
        image.src = w211Image;
        await image.decode();
        setCarImage(image);
      };
  
      loadImage();*/

    }, []);  

    if (carHavePicture === 'true' && soiduAuto != null) {
      piltRef = soiduAuto.pilt;
    } else {
      piltRef = w211;
    }   

    const moveLeft = () => {
      setLeftPosition(leftPosition - 10); 
    };
  
    const moveRight = () => {
      setLeftPosition(leftPosition + 10);
    }; 

    /*const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        default:
          break;
      }
    };*/

    /*useEffect(() => {
      document.body.style.overflow = "hidden";
  
      document.addEventListener("keydown", handleKeyDown);
      
      return () => {
        document.body.style.overflow = "visible";
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [leftPosition]);*/
  
    return (
      <div className="container">
        <img src={bgg} className="background" alt="Background" />
        <div className="car-object" style={{ left: `${leftPosition}px` }}>
          {carImage && <img src={carImage.src} alt="Car" />}
        </div>
        <button onClick={moveLeft} className="pedal left-pedal">Тормоз</button>
        <button onClick={moveRight} className="pedal right-pedal">Газ</button>
      </div>
    );

}
export default ManguDrive;

//Изменить картинку на piltRef