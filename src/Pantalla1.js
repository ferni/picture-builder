import React, { Component } from 'react';
import PanelMaterial from './PanelMaterial.js';

import './Pantalla1.css';
import canvasImg from'./img/canvas.jpg';
import glassImg from'./img/glass.jpg';
import aluminiumImg from'./img/aluminium.jpg';

class Pantalla1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cosas: props.initialCount,
      cantidadCambios: 0
    };
  }
  render() {
    return (
      <div className="Pantalla1">
        <h1>Crea tu cuadro</h1>
        <hr/>
        <h3>Para comenzar, selecciona un material</h3>
        <PanelMaterial imgSrc={canvasImg} nombre="Lienzo" descripcion="Lienzo de alta calidad."/>
        <PanelMaterial imgSrc={glassImg} nombre="Acrílico" descripcion="Acrílico de alta calidad."/>
        <PanelMaterial imgSrc={aluminiumImg} nombre="Aluminio" descripcion="Aluminio de alta calidad."/>
      </div>
    );
  }
}

export default Pantalla1;
