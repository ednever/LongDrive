import { useEffect, useState } from 'react';
import './App.css';

function HomePage(){
    const [soiduAutod, setSoiduautod] = useState([]);
    const [veoAutod, setVeoautod] = useState([]);

    const tellimus = () => {
      window.location.href = "http://localhost:3000/tellimus";
    }

    const autod = () => {
      window.location.href = "http://localhost:3000/autod";
    }

    useEffect(() => {
        fetch("https://localhost:7101/Soiduauto") //показ всех продуктов-1
        .then(res => res.json())
        .then(json => setSoiduautod(json));
        fetch("https://localhost:7101/Veoauto")
        .then(res => res.json())
        .then(json => setVeoautod(json));
    }, []);

    function redirectToPage(select, autodList) {
        var selectedValue = select.value;
        if (selectedValue) 
        {
        var test;
        if (autodList === soiduAutod) 
        {
            test = "http://localhost:3000/soiduAutod";
        } 
        else if(autodList === veoAutod)
        {
            test = "http://localhost:3000/veoAutod";
        }
        window.location.href = test;
        }
    };


    return (
        <div className="App">
          <div className="App-body">
            <div className="App-container">
              <header className="App-header"><h1>Long Drive</h1></header>
              <header className="App-header"><h3>Выберите</h3></header>
              <div>
              <select onChange={(e) => redirectToPage(e.target, soiduAutod)}>
                <option value="">Машины</option>
                {soiduAutod.map((auto) => (<option value={auto.mark}> {auto.mark} </option>))} 
              </select>
    
              <select onChange={(e) => redirectToPage(e.target, veoAutod)}>
                <option value="">Грузовики</option>
                {veoAutod.map((auto) => (<option value={auto.mark}> {auto.mark} </option>))}
              </select>
    
              </div>
              <button onClick={tellimus}>Добавить заказ</button>
              <button onClick={autod}>Добавить тс</button>
            </div>
          </div>
        </div>
      );
  };
  
export default HomePage;