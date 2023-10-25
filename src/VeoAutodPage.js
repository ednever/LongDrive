import React, { useEffect, useState } from 'react';
import './App.css';

function VeoAutodPage() {
  const [veoAuto, setVeoAuto] = useState(null);
  const veoAutoId = Number(localStorage.getItem('autoId'));

  const [soiduPaevik, setSoiduPaevik] = useState(null);
  const soiduPaevikId = Number(localStorage.getItem('soiduPaevikId'));

  const [tellimused, setTellimused] = useState([]);
  const [selectedTellimus, setSelectedTellimus] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    fetch("https://localhost:7101/Veoauto/" + veoAutoId)
      .then((res) => res.json())
      .then((json) => setVeoAuto(json));
    fetch("https://localhost:7101/Soidupaevik/" + soiduPaevikId)
      .then((res) => res.json())
      .then((json) => setSoiduPaevik(json));
    fetch("https://localhost:7101/Tellimus/")
      .then((res) => res.json())
      .then((json) => setTellimused(json));
  }, []);

  function goBack() {
    window.history.back();
  }

  function mangu(tellimusId, tellimusAeg) {
    window.location.href = "http://localhost:3000/mangudrive";
    localStorage.setItem('tellimusId', tellimusId.toString());
    localStorage.setItem('tellimusAeg', tellimusAeg);
  }

  function formatDate(dateTimeString) {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  function handleTellimusChange(event) {
    const selectedTellimusId = event.target.value;
    setSelectedTellimus(selectedTellimusId);
    setIsButtonActive(!!selectedTellimusId);
  }

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-container">
          <button onClick={goBack}>Назад</button>
          <header className="App-header">
            <h3>Грузовик</h3>
          </header>
          <div id="test">
            <table>
              {veoAuto ? (
                <tbody>
                  <tr>
                    <td>Марка:</td>
                    <td>{veoAuto.mark}</td>
                  </tr>
                  <tr>
                    <td>Длина:</td>
                    <td>{veoAuto.pikkus}</td>
                  </tr>
                  <tr>
                    <td>Масса:</td>
                    <td>{veoAuto.mass}</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>Loading...</td>
                  </tr>
                </tbody>
              )}
            </table>
            <div className="divider"></div>
            <table>
              {soiduPaevik ? (
                <tbody>
                  <tr>
                    <td>Начало:</td>
                    <td>{formatDate(soiduPaevik.algus)}</td>
                  </tr>
                  <tr>
                    <td>Конец:</td>
                    <td>{formatDate(soiduPaevik.lopp)}</td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>Loading...</td>
                  </tr>
                </tbody>
              )}
            </table>
            <div className="divider"></div>
            <table border={1}>
              <thead>
                <tr>
                  <th>Заказ</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      onChange={handleTellimusChange}
                      value={selectedTellimus}
                    >
                      <option value="" disabled>
                        Выберите заказ
                      </option>
                      {tellimused.map((tellimus) => (
                        <option key={tellimus.id} value={tellimus.id}>
                          {`${tellimus.nimi} ${tellimus.vahemaa} ${tellimus.kirjeldus}`}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      disabled={!isButtonActive}
                      onClick={() => {
                        const selectedTellimusObj = tellimused.find(
                          (tellimus) =>
                            tellimus.id === Number(selectedTellimus)
                        );
                        if (selectedTellimusObj) {
                          mangu(
                            selectedTellimusObj.id,
                            selectedTellimusObj.vahemaa
                          );
                        }
                      }}
                    >
                      Поехали
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VeoAutodPage;
