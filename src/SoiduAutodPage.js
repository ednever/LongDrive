import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SoiduAutodPage() {
  const location = useLocation();
  const [soiduAutod, setSoiduautod] = useState([]);
  const [carData, setCarData] = useState({});

  useEffect(() => {
    fetch("https://localhost:7101/Soiduauto")
      .then(res => res.json())
      .then(json => setSoiduautod(json));
    
    const selectedCarData = location.state?.carData;
    if (selectedCarData) {
      setCarData(selectedCarData);
    }
  }, [location.state?.carData]);

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-container">
          <button onClick={() => window.history.back()}>Назад</button>
          <header className="App-header">
            <h3>Машина</h3>
          </header>
          <table>
            <tbody>
              {soiduAutod.map((auto) => (
                <tr key={auto.mark}>
                  <tr>
                    <td>Марка: </td>
                    <td>{auto.mark}</td>
                  </tr>
                  <tr>
                    <td>Длина: </td>
                    <td>{auto.pikkus}</td>
                  </tr>
                  <tr>
                    <td>Масса: </td>
                    <td>{auto.mass}</td>
                  </tr>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SoiduAutodPage;
