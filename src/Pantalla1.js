import React, { Component } from 'react';
import PanelMaterial from './PanelMaterial.js';

import './Pantalla1.css';
import canvasImg from'./img/canvas.jpg';
import glassImg from'./img/glass.jpg';
import aluminiumImg from'./img/aluminium.jpg';

class Pantalla1 extends Component {
  constructor(props) {
    super(props);
    this.handlePanelClick = this.handlePanelClick.bind(this);
  }
  handlePanelClick(material) {
    this.props.onMaterialSelected(material);
    console.log('Material seleccionado:' + material);
  }
  render() {
    return (
      <div className="Pantalla1">
        <h1>Armá tu cuadro</h1>
        <hr/>
        <h2>Para comenzar, seleccioná un material</h2>
        <div className="paneles">
          <PanelMaterial onClick={this.handlePanelClick.bind(null, 'Lienzo')} imgSrc={canvasImg} material="Lienzo" descripcion="Lienzo de alta calidad."/>
          <PanelMaterial onClick={this.handlePanelClick.bind(null, 'Acrílico')} imgSrc={glassImg} material="Acrílico" descripcion="Acrílico de alta calidad."/>
          <PanelMaterial onClick={this.handlePanelClick.bind(null, 'Aluminio')} imgSrc={aluminiumImg} material="Aluminio" descripcion="Aluminio de alta calidad."/>
        </div>
      </div>
    );
  }
}

export default Pantalla1;
