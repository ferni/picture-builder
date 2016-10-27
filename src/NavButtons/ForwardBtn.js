import React, { Component } from 'react';
import './NavBtn.css';
import './ForwardBtn.css';
import FontIcon from 'material-ui/FontIcon';

 class ForwardBtn extends Component {
   render() {
     return (
       <div className="ForwardBtn NavBtn" onClick={this.props.onClick}>
        <img src={this.props.imgSrc} role="presentation" />
        <div className="texto">
          <strong>Continuar</strong><br/>
          <span className="descripcion">{this.props.desc}</span>
        </div>
        <div className="flechita-adelante">
          <FontIcon className="material-icons" color="white" style={{
            fontSize: '40px',
            marginTop: '3px',
            color: 'white'
          }}>
            keyboard_arrow_right
          </FontIcon>
        </div>
       </div>
     );
   }
 }

 export default ForwardBtn;
