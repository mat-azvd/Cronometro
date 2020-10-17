import React from 'react';
import './App.css';
import Botao from './Botao';


class Contador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            milisegundos: 0,
            segundos: 0,
            minutos: 0,
            play: false,
            namePlay: "Play"
        }
    }

    incrementar(){
        this.setState(
            (state) => {
            if(this.state.play==true){
                           
                    if (state.milisegundos >= 99) {
                        
                        this.zerarMilisegundos()
                        this.incrementarSegundos()
                        if(state.segundos >= 59){
                            this.zerarSegundos()
                            this.incrementarMinutos()
                        }
                    }
                    return({milisegundos: state.milisegundos + 1})
                }
            }
        )
    }

    zerarMilisegundos(){
        this.setState({milisegundos: 0})
    }

    zerarSegundos(){
        this.setState({segundos: 0})
    }

    pararCronometro(){
        this.setState({play: !this.state.play})

        if(this.state.play){this.setState({namePlay: "Play"})
        }
        else {this.setState({namePlay: "Stop"})
        }
    }

    incrementarSegundos(){

        this.setState({segundos: this.state.segundos + 1})
    }


    incrementarMinutos(){

        this.setState({minutos: this.state.minutos + 1})
    }

    zerarCronometro(){
        this.setState({
            milisegundos: 0,
            segundos: 0,
            minutos: 0,
            play: false,
            namePlay: "Play"

        })
    }

    componentDidMount() {
        this.timer = setInterval( () => this.incrementar(), 10)
        this.incrementar()
    }


    render() {
        return(
            
            <div class="estilo" >
            <div id="horas"> {this.state.minutos < 10 ? `0${this.state.minutos}` : this.state.minutos}:
            {this.state.segundos < 10 ? `0${this.state.segundos}` : this.state.segundos}</div>
            <div id="milisegundos">:{this.state.milisegundos < 10 ? `0${this.state.milisegundos}` : this.state.milisegundos}</div>
            <div >
                <Botao onClick={() => {this.pararCronometro()}} label= {this.state.namePlay}/>
                <Botao onClick={() => {this.zerarCronometro()}} label="zerar"/>
            </div>

            </div>
            )
            
    }

}


export default Contador