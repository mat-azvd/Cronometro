import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';
import AppRelogio from './AppRelogio';
import AppTemporizador from './AppTemporizador'

import Contador from './Contador';
import LabelCronometro from './LabelCronometro';
import Botao from './Botao';
import Menu from './Menu';
import Relogio from './Relogio';
import Timer from './Temporizadorteste1';

export default function Routes() {
    return (
      <Router>
        <Route exact path="/" component={App} />
        <Route path="/relogio" component={AppRelogio} />
        <Route path="/timer" component={AppTemporizador} />
        <Route path="/contador" component={Contador} />
      </Router>
    );
  }