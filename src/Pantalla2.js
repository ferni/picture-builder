import React, { Component } from 'react';
import CuadroPreview from './CuadroPreview.js';

import './Pantalla2.css';

var styles = {
  singlePrint: 'Single print',
  splitImage: 'Split image',
  wallDisplayes: 'Wall displays',
  collages: 'Collages'
};

class Pantalla2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: styles.singlePrint
    }
    this.getConfigCuadro = this.getConfigCuadro.bind(this);
  }
  getConfigCuadro() {
    return {
      material: this.props.material,
      style: this.state.style,
      shape: this.state.shape,
      size: this.state.size
    }
  }
  render() {
    return (
      <div className="Pantalla2">
        <div class="panel-mitad">
          <h3>{this.props.material} {this.state.style}: {this.state.shape} {this.state.size}</h3>
          <CuadroPreview config={this.getConfigCuadro()}/>
        </div>
        <div class="panel-mitad">

        </div>
      </div>
    );
  }
}

export default Pantalla2;
