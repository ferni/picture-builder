import React, { Component } from 'react';
// import './ForwardBtn.css';

 class ForwardBtn extends Component {
   render() {
     return (
       <div className="ForwardBtn">
        <img src={this.props.imgSrc} role="presentation" />
        <div className="texto">
          <h3>Continuar</h3>
          <span className="descripcion">{this.props.desc}</span>
        </div>
        <div className="flechita-adelante"> &gt; </div>
       </div>
     );
   }
 }

 export default ForwardBtn;
