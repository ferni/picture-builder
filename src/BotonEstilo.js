import React, {Component} from 'react';
import './BotonEstilo.css';

class BotonEstilo extends Component {
  render() {
    return (
      <div className="BotonEstilo seleccionable"  onClick={this.props.onClick}>
          <img src={this.props.imgSrc} alt={this.props.descripcion}/><br/>
          <span>{this.props.nombre}</span><br/>
          <span>Desde ${this.props.precioMinimo}</span>
      </div>
    );
  }
}

export default BotonEstilo;
