import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //const [selectedOption1, setSelectedOption1] = useState('');
  //const [selectedOption2, setSelectedOption2] = useState('');
  const [soiduAutod, setSoiduautod] = useState([]);
  const [veoAutod, setVeoautod] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7101/Soiduauto") //показ всех продуктов-
      .then(res => res.json())
      .then(json => setSoiduautod(json));
    fetch("https://localhost:7101/Veoauto")
      .then(res => res.json())
      .then(json => setVeoautod(json));
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-container">

          <header className="App-header"><h1>Long Drive</h1></header>
          <header className="App-header"><h3>Выберите</h3></header>
          <div>
          <select>
            <option value="Машины">Машины</option>
            {soiduAutod.map((auto) => (<option value={auto.mark}> {auto.mark} </option>))}
          </select>

          <select>
            <option value="Грузовики">Грузовики</option>
            {veoAutod.map((auto) => (<option value={auto.mark}> {auto.mark} </option>))}
          </select>

          </div>
          <button>Добавить</button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
//value={selectedOption1} onChange={(e) => setSelectedOption1(e.target.value)}