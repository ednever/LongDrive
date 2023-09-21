import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-container">
          <header className="App-header">
            <h1>Выберите</h1>
          </header>
          <select
            value={selectedOption1}
            onChange={(e) => setSelectedOption1(e.target.value)}
          >
            <option value="">Выбор 1</option>
            <option value="Опция 1">Опция 1</option>
            <option value="Опция 2">Опция 2</option>
          </select>
          <select
            value={selectedOption2}
            onChange={(e) => setSelectedOption2(e.target.value)}
          >
            <option value="">Выбор 2</option>
            <option value="Опция A">Опция A</option>
            <option value="Опция B">Опция B</option>
          </select>
          <button>Добавить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
