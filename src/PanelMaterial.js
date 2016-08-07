import React, { Component } from 'react';
import './PanelMaterial.css';

function capitalize(str) {
  var primera = str.substring(0, 1);
  primera = primera.toUpperCase();
  str = primera[0] + str.substring(1);
  return str;
}

class PanelMaterial extends Component {
  render() {
    var material = capitalize(this.props.material);
    return (
      <div className="PanelMaterial" >
        <div onClick={this.props.onClick}>
          <img src={this.props.imgSrc} alt={'Seleccionar ' + material}/>
          <h4>{material}</h4>
          <p>{this.props.descripcion}</p>
        </div>
      </div>
    );
  }
}

export default PanelMaterial;
