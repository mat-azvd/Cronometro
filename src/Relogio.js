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
        return Moment().format('HH:mm:ss');
       }
    
       componentDidMount(){
        setInterval(() => {this.setState({timeNow: this.hora(), }); }, 1000);
      }
      

    
    render() {
        return(
            <div class="estilo">

              <div id="relogiohoras"> {Moment().format('HH:mm')}  </div>
              <div id="relogiosegundos"> {Moment().format(':ss')}</div> 
            <h1>--</h1>
            <select class="selectpicker" data-live-search="true"></select>
           
            </div>
            
            )
            
    }
}

export default Relogio;