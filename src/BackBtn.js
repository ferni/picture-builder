import React, { Component } from 'react';
import './NavBtn.css';

 class BackBtn extends Component {
   render() {
     return (
       <div className="BackBtn NavBtn seleccionable" onClick={this.props.onClick}>
        <div className="flechita-atras"> &lt; </div>
        <div className="texto">
          <strong>Volver</strong><br/>
          <span className="descripcion">{this.props.desc}</span>
        </div>
       </div>
     );
   }
 }

 export default BackBtn;
