import React from 'react';
import './App.css';
import Botao from './Botao';
import Moment from 'moment';

class Relogio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hora: this.hora()};
      }

      hora() {
        return Moment().format('hh:mm:ss');
       }
    
       componentDidMount(){
        setInterval(() => {this.setState({timeNow: this.hora(), }); }, 1000);
      }
      

    
    render() {
        return(
            <div class="estilo">
            <h1> {Moment().format('h:mm:s')} </h1>
            <select class="selectpicker" data-live-search="true"></select>
           
            </div>
            
            )
            
    }
}

export default Relogio;