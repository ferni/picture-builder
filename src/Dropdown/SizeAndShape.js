import React, { Component } from 'react';
 import './SizeAndShape.css';

 class SizeAndShape extends Component {
   render() {
     return (
       <div className="SizeAndShape">
        <div className="img">
          <img role="presentation" src={this.props.imgSrc} />
        </div>
        <div className="tamaño-y-precio">
          <span className="tamaño">{this.props.tamaño} cm</span>
          <br/>
          <span className="precio">${this.props.precio}</span>
        </div>
        <div className="promo">
          <span className="promo-porc">Descuento {this.props.promoPorc}%</span>
          <br/>
          <span className="promo-ahorro">Ahorra ${this.props.promoAhorro}</span>
        </div>
       </div>
     );
   }
 }

 export default SizeAndShape;
