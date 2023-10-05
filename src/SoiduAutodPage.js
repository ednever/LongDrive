import React, { useEffect, useState } from 'react';

function SoiduAutodPage() {
  const [soiduAutod, setSoiduautod] = useState([]);
  const elementIndexToShow = JSON.parse(localStorage.getItem('myValue'));

  useEffect(() => {
    fetch("https://localhost:7101/Soiduauto")
      .then(res => res.json())
      .then(json => setSoiduautod(json));
  }, []);

  const filteredAutos = soiduAutod.filter((auto) => 1 === elementIndexToShow);

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
            {filteredAutos.map((auto) => (
              <tr key={auto.Id}>
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
                <tr>
                  <td>Картинка: </td>
                  <td><img src={auto.pilt} alt='pilt' width={500} height={250}/></td>
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
{/* <tr key={soiduAutod.at(elementIndexToShow)}>
                  <tr>
                    <td>Марка: </td>
                    <td>{soiduAutod.at(elementIndexToShow).mark}</td>
                  </tr>
                  <tr>
                    <td>Длина: </td>
                    <td>{soiduAutod.at(elementIndexToShow).pikkus}</td>
                  </tr>
                  <tr>
                    <td>Масса: </td>
                    <td>{soiduAutod.at(elementIndexToShow).mass}</td>
                  </tr>
                  <tr>
                    <td>Картинка: </td>
                    <td><img src={soiduAutod.at(0).pilt} alt='pilt' width={500} height={250}/></td>
                  </tr>
                </tr> */}