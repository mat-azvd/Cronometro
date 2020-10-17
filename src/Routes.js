import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';

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
        <Route path="/relogio" component={Relogio} />
        <Route path="/timer" component={Timer} />
        <Route path="/contador" component={Contador} />
      </Router>
    );
  }