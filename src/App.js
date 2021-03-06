import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador';
import LabelCronometro from './LabelCronometro';
import Botao from './Botao';
import Menu from './Menu';
import Relogio from './Relogio';
import Timer from './Temporizadorteste1';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div class="background" >
    
      <div id="principal">

        <div id="menutemporizador" key="Temporizador"> 
          <Link to={"/timer"}>
          <LabelCronometro name="Temporizador"/>
          </Link>
        </div>

        <div id="menurelogio" key="Relogio"> 
          <Link to={"/relogio"}>
          <LabelCronometro name="Relogio"/>
          </Link>
        </div>

        <div id="Cronometro">
        <LabelCronometro name="Cronometro"/>
          <Contador/>
          
        </div>

      
      </div>
    </div>
    //dentro do div acima <Botao onClick={() => this.zerarCronometro()} label="zerar"/> <Menu />
    
  );
}

export default App;
