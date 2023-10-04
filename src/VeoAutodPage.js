import './App.css';
//

function VeoAutodPage () {

    function goBack() { 
        window.history.back(); 
    };

    return (
        <div class="App">
            <div class="App-body">
                <div class="App-container"> 
                <button onClick={goBack}>Назад</button>
                <header class="App-header"><h3>Грузовик</h3></header>          
                </div>
            </div>
        </div>
    );
};
  
export default VeoAutodPage;