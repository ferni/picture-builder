import React, { Component } from 'react';
import './Pantalla3.css';
import BackBtn from './BackBtn.js';
import ForwardBtn from './ForwardBtn.js';

 class Pantalla3 extends Component {
   render() {
     return (
       <div className="Pantalla3">
         <div className="navigation-buttons">
           <BackBtn desc="Cambiar Tamaño" onClick={this.props.onGoTo.bind(null, 2)}/>
           <ForwardBtn desc="Editar Estilo" onClick={this.props.onGoTo.bind(null, 4)}/>
         </div>
       </div>
     );
   }
 }

 export default Pantalla3;
