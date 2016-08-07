import React, { Component } from 'react';
import './PanelMaterial.css';

class PanelMaterial extends Component {
  render() {
    return (
      <div className="PanelMaterial">
        <img src={this.props.imgSrc} alt={'Seleccionar ' + this.props.nombre}/>
        <h4>{this.props.nombre}</h4>
        <p>{this.props.descripcion}</p>
      </div>
    );
  }
}

export default PanelMaterial;
