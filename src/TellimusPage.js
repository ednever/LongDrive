import { useRef } from 'react';
import './App.css';

function TellimusPage() {
  const nimiRef = useRef();
  const vahemaaRef = useRef();
  const kirjeldusRef = useRef();

  function Lisa(nimi, vahemaa, kirjeldus) {
    if (nimi.trim() !== "" && kirjeldus.trim() !== "") 
    {
      fetch('https://localhost:7101/Tellimus/lisa/' + nimi + '/' + vahemaa + '/' + kirjeldus, 
      { method: "POST", headers: { "Content-Type": "application/json" }}); 

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
            <label>Название</label><br/>
            <input ref={nimiRef} type="text" />

            <br/><label>Путь</label><br/>
            <input ref={vahemaaRef} type="number" min={1} />

            <br/><label>Описание</label><br/>
            <input ref={kirjeldusRef} type="text" />

            <br/><br/><button onClick={() => Lisa(nimiRef.current.value, vahemaaRef.current.value, kirjeldusRef.current.value)}>Добавить</button>
          </div>          
        </div>
      </div>
    </div>
  );
};
  
export default TellimusPage;