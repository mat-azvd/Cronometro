import React from 'react';
import './App.css';
import Botao from './Botao';

class Temporizador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            milisegundos: 0,
            segundos: 0,
            minutos: 0,
            horas: 0,
            play: false,
            namePlay: "Play"
        }
    }

    decrementar(){
        this.setState(
            (state) => {
            if(this.state.play==true){
                
                    if ((state.horas - 1) >= 0) {
                        state.horas = state.horas - 1;
                        this.zerar()
                        this.incrementarMinutos()
                    }
                    return({segundos: state.segundos + 1})
                }
            }
        )
    }

    zerar(){
        this.setState({segundos: 0})
    }

    render() {
        const { minutos, segundos } = this.state
        return (
          <div>
            <h1>Time Remaining: { minutos }:{ segundos }</h1>
          </div>
        )
      }
}

export default Temporizador