import React, { Component } from 'react';
import './NavBtn.css';
import './BackBtn.css';
import FontIcon from 'material-ui/FontIcon';

 class BackBtn extends Component {
   render() {
     return (
       <div className="BackBtn NavBtn" onClick={this.props.onClick}>
        <div className="flechita-atras">
          <FontIcon className="material-icons" color="white" style={{
            fontSize: '40px',
            marginTop: '3px',
            color: '#555'
          }}>
            keyboard_arrow_left
          </FontIcon>
        </div>
        <div className="texto">
          <strong>Volver</strong><br/>
          <span className="descripcion">{this.props.desc}</span>
        </div>
       </div>
     );
   }
 }

 export default BackBtn;
