import React, { Component } from 'react';
 import './Shape.css';

 class Shape extends Component {
   render() {
     return (
       <div className="Shape">
        <img role="presentation" src={this.props.imgSrc} />
        <span className="nombre">
          {this.props.nombre}
        </span>
       </div>
     );
   }
 }

 export default Shape;
