import React, { Component } from 'react'
import './App.css';

export default class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            milisegundos: 0,
            segundos: 0,
            minutos: 3
        }
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { segundos, minutos } = this.state

            if (segundos > 0) {
                this.setState(({ segundos }) => ({
                    segundos: segundos - 1
                }))
            }
            if (segundos === 0) {
                if (minutos === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutos }) => ({
                        minutos: minutos - 1,
                        segundos: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutos, segundos } = this.state
        return (
            <div>
                <input type="number" onChangeText={(value) => this.setState('minutos', value)}
                        value={this.state.minutos < 10 ? `0${this.state.minutos}` : this.state.minutos}
                        placeholder=" 00:00" class="form-control"></input>
                <input type="number" onChangeText={(value) => this.setState('segundos', value)}
                        value={this.state.segundos < 10 ? `0${this.state.segundos}` : this.state.segundos}
                        placeholder=" 00:00" class="form-control"></input>
                <input type="number" onChangeText={(value) => this.setState('milisegundos', value)}
                        value={this.state.milisegundos < 10 ? `0${this.state.milisegundos}` : this.state.milisegundos} 
                        placeholder=" 00:00" class="form-control"></input>
                { minutos === 0 && segundos === 0
                    ? <h1>Fim!</h1>
                    : <h1>{minutos}:{segundos < 10 ? `0${segundos}` : segundos}</h1>
                }
            </div>
        )
    }
}