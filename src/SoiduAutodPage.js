import React, { useEffect, useState } from 'react';

function SoiduAutodPage() {
  const [soiduAuto, setSoiduAuto] = useState(null);
  const elementIndexToShow = JSON.parse(localStorage.getItem('myValue'));

  useEffect(() => {
    fetch("https://localhost:7101/Soiduauto/" + JSON.stringify(elementIndexToShow))
      .then(res => res.json())
      .then(json => setSoiduAuto(json));
  }, []);

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
            {soiduAuto ? (
              <tr>
                <tr>
                  <td>Марка:</td>
                  <td>{soiduAuto.mark}</td>
                </tr>
                <tr>
                  <td>Длина:</td>
                  <td>{soiduAuto.pikkus}</td>
                </tr>
                <tr>
                  <td>Масса:</td>
                  <td>{soiduAuto.mass}</td>
                </tr>
                <tr>
                  <td>Картинка:</td>
                  <td><img src={soiduAuto.pilt} alt="pilt" width={500} height={250} /></td>
                </tr>
              </tr>
            ) : (
              <p>Loading...</p>
            )}                              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SoiduAutodPage;