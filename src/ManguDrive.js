import { useEffect, useState, useRef } from 'react';
import './CarAnimation.css';
import bgg from './images/bgg.png';
import w211 from './images/w211.png';

function ManguDrive() {  
    const carHavePicture = localStorage.getItem('autoType');
    const carId = Number(localStorage.getItem('autoId'));

    const [leftPosition, setLeftPosition] = useState(0);
    const [soiduAuto, setSoiduAuto] = useState(null);
    var piltRef = useRef('');

    const moveLeft = () => {
      setLeftPosition(leftPosition - 10); 
    };
  
    const moveRight = () => {
      setLeftPosition(leftPosition + 10);
    };   

    useEffect(() => {
      fetch("https://localhost:7101/Soiduauto/" + JSON.stringify(carId))
        .then(res => res.json())
        .then(json => setSoiduAuto(json));
      w211 = require('./images/w211.png');         
    }, []);  

    if (carHavePicture === 'true' && soiduAuto != null) {
      piltRef = soiduAuto.pilt;
    } else {
      piltRef = w211;
    }   

    

    const objectStyle = {
      position: 'absolute',
      bottom: '-5px',
      left: `${leftPosition}px`,
    };
  
    const pedalStyle = {
      position: 'absolute',
      top: '0',
      left: 0,
      width: '200px',
      height: '100px',
      border: '1px solid black',
      transform: 'translateX(-50%)',
    };
  
    return (
      <div>
        <img src={bgg} style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }} />       
        <div style={objectStyle}><img src={piltRef} alt='pilt' /></div>
        <button onClick={moveLeft} className="pedal">Влево</button>
        <button onClick={moveRight} className="pedal">Вправо</button>
      </div>
    );

}
export default ManguDrive;
