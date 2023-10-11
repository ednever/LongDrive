import { useEffect, useState } from 'react';
import './App.css';

function VeoAutodPage () {
    const [veoAuto, setVeoAuto] = useState(null);
    const elementIndexToShow = JSON.parse(localStorage.getItem('myValue'));

    //let soiduPaevikId;
    const [soiduPaevik, setSoiduPaevik] = useState(null);
    

    useEffect(() => {
        fetch("https://localhost:7101/Veoauto/" + elementIndexToShow)
        .then(res => res.json())
        .then(json => setVeoAuto(json));
    }, []);

    useEffect(() => {
        fetch("https://localhost:7101/Soidupaevik/" + JSON.stringify(2))//veoAuto.soiduPaevik.id))
        .then(res => res.json())
        .then(json => setSoiduPaevik(json));
    }, []);

    function goBack() { 
        window.history.back(); 
    };

    return (
        <div class="App">
            <div class="App-body">
                <div class="App-container"> 
                    <button onClick={goBack}>Назад</button>
                    <header class="App-header">
                        <h3>Грузовик</h3>
                    </header>  
                    <div id='test'> 
                    <table>
                        <tbody>
                        {veoAuto ? (
                        <tr>                        
                            <tr>
                                <td>Марка:</td>
                                <td>{veoAuto.mark}</td>
                            </tr>
                            <tr>
                                <td>Длина:</td>
                                <td>{veoAuto.pikkus}</td>
                            </tr>
                            <tr>
                                <td>Масса:</td>
                                <td>{veoAuto.mass}</td>
                            </tr>
                        </tr>
                        ) : (
                        <p>Loading...</p>
                        )}                              
                        </tbody>
                    </table> 
                    <div class="divider"></div>
                    <table>
                    <tbody>
                        {soiduPaevik ? (                       
                        <tr>                           
                            <tr>
                                <td>Начало:</td>
                                <td>{soiduPaevik.algus}</td>
                            </tr>
                            <tr>
                                <td>Конец:</td>
                                <td>{soiduPaevik.lopp}</td>
                            </tr>
                        </tr>
                        ) : (
                        <p>Loading...</p>
                        )}                              
                        </tbody>
                    </table>
                    <div class="divider"></div>
                    <table>
                        <tr>
                        <th>Заголовок 1</th>
                        <th>Заголовок 2</th>
                        </tr>
                        <tr>
                        <td>Содержимое 1</td>
                        <td>Содержимое 2</td>
                        </tr>
                    </table>
                    </div> 
                </div>
            </div>
        </div>
    );
};
  
export default VeoAutodPage;