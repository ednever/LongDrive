import { useState, useRef } from 'react';
import './App.css';


function AutoLPage() {
  const [selectedOption, setSelectedOption] = useState('Машина');

  const markRef = useRef();
  const massRef = useRef();
  const pikkusRef = useRef();
  const piltRef = useRef();

  function Lisa(mark, mass, pikkus) { //Добавление заказа
    if (mark.trim() !== "" && mass !== "" && pikkus !== "")
    {
      if (mass >= 3500) 
      {
        fetch('https://localhost:7101/Veoauto/lisa/' + pikkus + '/' + mass + '/' + mark, 
        { method: "POST", headers: { "Content-Type": "application/json" }}); 
      } 
      else 
      {
        fetch('https://localhost:7101/Soiduauto/lisa/' + pikkus + '/' + mass + '/' + mark + '/' + piltRef.current.value.replace(/\//g, '%2F'), 
        { method: "POST", headers: { "Content-Type": "application/json" }}); 
        piltRef.current.value = "";
      }

      markRef.current.value = "";
      massRef.current.value = "";
      pikkusRef.current.value = "";     
    } 
    else 
    {
      alert('Поля пусты или содержат только пробелы.');
      return;
    }   
  };

  function goBack() { 
    window.history.back(); 
  };

  const OptionChange = (choiceIndex) => {
    if (choiceIndex === 0) {
      setSelectedOption('Машина');
      massRef.current.min = 1;
      massRef.current.max = 3500;
    } else {
      setSelectedOption('Грузовик');
      massRef.current.min = 3500;
      massRef.current.max = '';
    }
  };

  return (
    <div class="App">
      <div class="App-body">
        <div class="App-container"> 
          <button onClick={goBack}>Назад</button>
          <header class="App-header"><h3>Добавление ТС</h3></header>   

          <h4>Выберите тип транспорта</h4>
          <select value={selectedOption} onChange={(e) => OptionChange(e.target.selectedIndex)}>
            <option value="Машина">Машина</option>
            <option value="Грузовик">Грузовик</option>
          </select>
          <div>
            <label>Марка</label><br />
            <input ref={markRef} type="text" />

            <br /><label>Масса</label><br />
            <input ref={massRef} type="number" min={1} />

            <br /><label>Длина</label><br />
            <input ref={pikkusRef} type="number" min={1} />

            {selectedOption === 'Машина' && (
              <div>
                <label>Картинка</label><br />
                <input ref={piltRef} type="text" />
              </div>
            )}

            <button onClick={() => Lisa(markRef.current.value, massRef.current.value, pikkusRef.current.value)}>Добавить</button>
          </div>


        </div>
      </div>
    </div>
  );
};
  
export default AutoLPage;