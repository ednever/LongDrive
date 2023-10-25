import React, { useEffect, useState } from 'react';


function SoiduAutodPage() {
  const [soiduAuto, setSoiduAuto] = useState(null);
  const elementIndexToShow = Number(localStorage.getItem('autoId'));

  useEffect(() => {
    fetch("https://localhost:7101/Soiduauto/" + JSON.stringify(elementIndexToShow))
      .then(res => res.json())
      .then(json => setSoiduAuto(json));
  }, []);


  const mangu = () => {
    window.location.href = "http://localhost:3000/mangudrive";
  }

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-container">
          <button onClick={() => window.history.back()}>Назад</button>
          <header className="App-header">
            <h3>Машина</h3>
          </header>
          <table style={{ width: '100%' }}>
  <tbody>
    {soiduAuto ? (
      <tr>
        <td style={{ paddingRight: '20px' }}>
          <table>
            <tbody>
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
            </tbody>
          </table>
        </td>
        <td>
          <img src={soiduAuto.pilt} alt="pilt" width={400} height={200} />
        </td>
      </tr>
    ) : (
      <tr>
        <td colSpan="2">Loading...</td>
      </tr>
    )}
  </tbody>
</table>
<button className="strbtn" onClick={mangu}>Начать </button>
        </div>
      </div>
    </div>
  );
}

export default SoiduAutodPage;