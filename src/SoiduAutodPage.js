import { Outlet, Link } from "react-router-dom";
import './App.css';
//

function SoiduAutodPage() {

  function goBack() { 
    window.history.back(); 
  };

  return (
    <div class="App">
      <div class="App-body">
        <div class="App-container"> 
          <button onClick={goBack}>Назад</button>
          <header class="App-header"><h3>Машина</h3></header>          
        </div>
      </div>
    </div>
  );
};
  
export default SoiduAutodPage;