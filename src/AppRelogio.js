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

function AppRelogio() {
  return (

    <div class="background" >
    
      <div id="principal">
       

        <div id="menucontador" key="Contador"> 
          <Link to={"/"}>
          <LabelCronometro name="Cronometro"/>
          </Link>
        </div>

        <div id="menutemporizador" key="Temporizador"> 
          <Link to={"/timer"}>
          <LabelCronometro name="Temporizador"/>
          </Link>
        </div>

        <div id="Relogio">
        <LabelCronometro name="Relogio"/>
          <Relogio/>
          
        </div>

      
      </div>
    </div>
    //dentro do div acima <Botao onClick={() => this.zerarCronometro()} label="zerar"/> <Menu />
    
  );
}

export default AppRelogio;