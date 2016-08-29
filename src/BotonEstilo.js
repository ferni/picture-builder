import React, {Component} from 'react';
import './BotonEstilo.css';

class BotonEstilo extends Component {
  render() {
    return (
      <div className="BotonEstilo seleccionable"  onClick={this.props.onClick}>
          <img src={this.props.imgSrc} alt={this.props.descripcion}/><br/>
          <h3>{this.props.nombre}</h3>
          <p>Desde ${this.props.precioMinimo}</p>
      </div>
    );
  }
}

export default BotonEstilo;
