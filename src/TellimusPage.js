import { useState, useRef } from 'react';
import './App.css';

function TellimusPage() {
  const [tellimused, setTellimused] = useState([]);

  const nimiRef = useRef();
  const vahemaaRef = useRef();
  const kirjeldusRef = useRef();

  function Lisa(nimi, vahemaa, kirjeldus) { //Добавление заказа
    if (nimi.trim() !== "" && kirjeldus.trim() !== "") {
      fetch('https://localhost:7101/Tellimus/lisa/' + nimi + '/' + Number(vahemaa) + '/' + kirjeldus, {"method": "POST"})
      .then(res => res.json())
      .then(json => setTellimused(json));

      nimiRef.current.value = "";
      vahemaaRef.current.value = 1;
      kirjeldusRef.current.value = "";

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

  return (
    <div class="App">
      <div class="App-body">
        <div class="App-container"> 
          <button onClick={goBack}>Назад</button>
          <header class="App-header"><h3>Заказ</h3></header>
          <div>
            <label>Nimetus</label><br/>
            <input ref={nimiRef} type="text" />

            <br/><label>Vahemaa</label><br/>
            <input ref={vahemaaRef} type="number" min={1} />

            <br/><label>Kirjeldus</label><br/>
            <input ref={kirjeldusRef} type="text" />

            <button onClick={() => Lisa(nimiRef.current.value, vahemaaRef.current.value, kirjeldusRef.current.value)}>Lisa</button>
          </div>          
        </div>
      </div>
    </div>
  );
};
  
export default TellimusPage;