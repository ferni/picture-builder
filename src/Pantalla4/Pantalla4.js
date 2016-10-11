import React, { Component } from 'react';
import './Pantalla4.css';
import BackBtn from '../BackBtn.js';
import ForwardBtn from '../ForwardBtn.js';

 class Pantalla4 extends Component {
   render() {
     return (
       <div className="Pantalla4">

         <div className="navigation-buttons">
           <BackBtn desc="Cambiar Fotos" onClick={this.props.onGoTo.bind(null, 3)}/>
           <ForwardBtn desc="Editar Estilo" onClick={this.props.onGoTo.bind(null, 4)}/>
         </div>
       </div>
     );
   }
 }

 export default Pantalla4;
