import React, { Component } from 'react';
// import './BackBtn.css';

 class BackBtn extends Component {
   render() {
     return (
       <div className="BackBtn">
        <div className="flechita-atras"> &lt; </div>
        <div className="texto">
          <h3>Volver</h3>
          <span className="descripcion">{this.props.desc}</span>
        </div>
       </div>
     );
   }
 }

 export default BackBtn;
