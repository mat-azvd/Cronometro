import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contador from './Contador';
import LabelCronometro from './LabelCronometro';
import Botao from './Botao';
import Menu from './Menu';
import Relogio from './Relogio';
import Timer from './Temporizadorteste1';

function App() {
  return (
    <div>
    <Menu />
    <LabelCronometro name="Cronometro"/>
    <Contador/>
    <h1>Relogio</h1>
    <Relogio/>
    <h1>Temporizador</h1>
    <Timer/>
    
    
    
    
    </div>
    //dentro do div acima <Botao onClick={() => this.zerarCronometro()} label="zerar"/>
    
  );
}

export default App;
