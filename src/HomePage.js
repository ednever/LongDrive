import { useEffect, useState } from 'react';
import './App.css';

function HomePage(){
    const [soiduAutod, setSoiduautod] = useState([]);
    const [veoAutod, setVeoautod] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const responseVeoauto = await fetch("https://localhost:7101/Veoauto");
          const responseSoiduauto = await fetch("https://localhost:7101/Soiduauto");
          
          if (responseSoiduauto.ok && responseVeoauto.ok) 
          {
            const jsonVeoauto = await responseVeoauto.json();
            setVeoautod(jsonVeoauto);

            const jsonSoiduauto = await responseSoiduauto.json();
            setSoiduautod(jsonSoiduauto);          
          } 
          else 
          {
            console.error("Ошибка при получении данных Veoauto:", responseVeoauto.status, responseVeoauto.statusText);
            console.error("Ошибка при получении данных Soiduauto:", responseSoiduauto.status, responseSoiduauto.statusText);            
          }

        } catch (error) {
          console.error("Произошла ошибка при запросе:", error);
        }
      }
    
      fetchData();
    }, []);

    function redirectToPage(select, autodList, index) {
        var selectedValue = select.value;
        if (selectedValue) 
        {
          var link;
          var autoId;
          var svsv;
          if (autodList === soiduAutod) 
          {
            link = "http://localhost:3000/soiduAutod";
            autoId = soiduAutod[index - 1].id;
            svsv = true;
          } 
          else if(autodList === veoAutod)
          {
            link = "http://localhost:3000/veoAutod";
            autoId = veoAutod[index - 1].id;
            svsv = false;
          }
          localStorage.setItem('autoId', autoId.toString());  
          localStorage.setItem('autoType', svsv.toString());       
          window.location.href = link;       
        }
    };


    return (
        <div className="App">
          <div className="App-body">
            <div className="App-container">
              <header className="App-header"><h1>Long Drive</h1></header>
              <header className="App-header"><h3>Выберите</h3></header>
              <div>
              <select onChange={(e) => redirectToPage(e.target, soiduAutod, e.target.selectedIndex)}>
                <option value="">Машины</option>
                {soiduAutod.map((auto) => (<option value={auto.mark}> {auto.mark} </option>))} 
              </select>
    
              <select onChange={(e) => redirectToPage(e.target, veoAutod, e.target.selectedIndex)}>
                <option value="">Грузовики</option>
                {veoAutod.map((auto) => (<option value={auto.mark}> {auto.mark} </option>))}
              </select>
    
              </div>
              <button onClick={() => window.location.href = "http://localhost:3000/tellimus"}>Добавить заказ</button>
              <button onClick={() => window.location.href = "http://localhost:3000/autod"}>Добавить тс</button>
            </div>
          </div>
        </div>
      );
  };
  
export default HomePage;