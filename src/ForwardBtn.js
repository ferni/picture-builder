import React, { Component } from 'react';
import './NavBtn.css';

 class ForwardBtn extends Component {
   render() {
     return (
       <div className="ForwardBtn NavBtn seleccionable" onClick={this.props.onClick}>
        <img src={this.props.imgSrc} role="presentation" />
        <div className="texto">
          <strong>Continuar</strong><br/>
          <span className="descripcion">{this.props.desc}</span>
        </div>
        <div className="flechita-adelante"> &gt; </div>
       </div>
     );
   }
 }

 export default ForwardBtn;
