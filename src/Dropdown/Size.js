import React, { Component } from 'react';
import './SizeAndShape.css';
import './Size.css';

 class Size extends Component {
   render() {
     return (
       <div className="SizeAndShape Size">
        <div className="img">
          <span className="tamaño">{this.props.tamaño} cm</span>
        </div>
        <div className="tamaño-y-precio">
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

 export default Size;
