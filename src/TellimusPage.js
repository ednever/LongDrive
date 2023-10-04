import { Outlet, Link } from "react-router-dom";
import './App.css';
//

function TellimusPage() {

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