import React, { Component } from 'react'
import './App.css';
import Botao from './Botao';

export default class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            horas: 0,
            segundos: 0,
            minutos: 0,
            play: false,
            namePlay: "Play",
            fim: "inicio"
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const {horas, segundos, minutos } = this.state

            if(this.state.play===true){

            if (segundos > 0) {
                this.setState(({ segundos }) => ({
                    segundos: segundos - 1
                }))
            }
            if (segundos == 0 ){
                if( minutos > 0){
                this.setState(({minutos}) => ({
                    minutos: minutos - 1,
                    segundos: 59
                }))
                }
            }
            if (segundos === 0) {
                if (minutos === 0) {
                    if (horas === 0 ) { 
                    this.setState({play: false});
                    this.setState({namePlay: "Play"});
                    this.setState({fim: "fim"});
                    
                } else {
                    this.setState(({ horas }) => ({
                        horas: horas - 1,
                        minutos:59,
                        segundos: 59
                    }))
                }
            }
            }
        } 
        }, 1000)
        
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    pararTemporizador(){
        const {horas, segundos, minutos } = this.state
        
        if (segundos !== 0 | minutos !== 0 | horas !== 0)  {
          
        this.setState({play: !this.state.play})
        this.setState({fim: "inicio"});
        if(this.state.play){this.setState({namePlay: "Play"})
        }
        else {this.setState({namePlay: "Stop"})
        this.setState({play: !this.state.play})
        }

    }
}

    zerarTemporizador(){
    this.setState({
        horas: 0,
        segundos: 0,
        minutos: 0,
        play: false,
        namePlay: "Play",
        fim: "inicio"

    })
    }
    alterarHoras = (event) => {
        this.setState({horas: event.target.value}) 
    }
    alterarMinutos = (event) => {
        this.setState({minutos: event.target.value}) 
    }
    alterarSegundos = (event) => {
        this.setState({segundos: event.target.value}) 
    }

    limitarValor(){
        if(this.state.minutos > 59){
            this.setState({minutos: 59})
        } else if (this.state.minutos < 0){
            this.setState({minutos: 0})
        } else {
            this.setState({minutos: this.state.minutos})
        }
    }
    

    render() {
        const {horas, minutos, segundos, fim } = this.state
        return (
            <div class="estilo">
                 <input
                    id="temporizador" 
                    type="number" 
                    onChange={this.alterarHoras}
                    // < 10 ? `0${this.state.horas}` : this.state.horas
                    value={this.state.horas} 
                    max="24" min="0"
                    placeholder="00" class="form-control"></input>
                <input 
                    id="temporizador" 
                    type="number" 
                    // < 10 ? `0${this.state.minutos}` : this.state.minutos}
                    onChange={this.alterarMinutos}
                    value={this.state.minutos}
                    max="59" min="0"                 
                    placeholder="00" class="form-control">
                </input>

                <input 
                    id="temporizador" 
                    type="number" 
                    onChange={this.alterarSegundos}
                    // < 10 ? `0${this.state.segundos}` : this.state.segundos
                    value={this.state.segundos}
                    max="59" min="0" 
                    placeholder="00" class="form-control"/>
               
                {horas === 0 && minutos === 0 && segundos === 0 && fim === "fim"
                    ? <h1>Fim!</h1>
                : <h1>{horas}:{minutos < 10 ? `0${minutos }` : minutos }:{segundos < 10 ? `0${segundos}` : segundos}</h1>
                }
                <div >
                <Botao onClick={() => {this.pararTemporizador()}} label= {this.state.namePlay}/>
                <Botao onClick={() => {this.zerarTemporizador()}} label="zerar"/>
                </div>
            </div>
        )
    }
}