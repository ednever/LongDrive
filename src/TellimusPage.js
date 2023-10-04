import { useEffect, useState } from 'react';
import './App.css';

function TellimusPage() {
  const [tellimused, setTellimused] = useState([]);

  function Lisa(nimi, vahemaa, kirjeldus) { //Добавление заказа
    fetch('https://localhost:7043/api/tooted/lisa/' + nimi + '/' + vahemaa + '/' + kirjeldus, {"method": "POST"})
      .then(res => res.json())
      .then(json => setTellimused(json));
  }



  function goBack() { 
    window.history.back(); 
  };

  return (
    <div class="App">
      <div class="App-body">
        <div class="App-container"> 
          <button onClick={goBack}>Назад</button>
          <header class="App-header"><h3>Заказ</h3></header>







        </div>
      </div>
    </div>
  );
};
  
export default TellimusPage;