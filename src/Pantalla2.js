import React, { Component } from 'react';
import CuadroPreview from './CuadroPreview.js';
import BotonEstilo from './BotonEstilo.js';

import './Pantalla2.css';

var styles = {
  singlePrint: 'Single print',
  splitImage: 'Split image',
  wallDisplays: 'Wall displays',
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
        <div className="panel-mitad">
          <h3>{this.props.material} {this.state.style}: {this.state.shape} {this.state.size}</h3>
          <CuadroPreview config={this.getConfigCuadro()}/>
        </div>
        <div className="panel-mitad">
          <h3>1. Elije el estilo</h3>
          <hr/>
          <div>
            <BotonEstilo nombre={styles.singlePrint} precioMinimo={14}/>
            <BotonEstilo nombre={styles.splitImage} precioMinimo={16}/>
            <BotonEstilo nombre={styles.wallDisplays} precioMinimo={18}/>
            <BotonEstilo nombre={styles.collages} precioMinimo={134}/>
          </div><br />

          <h3>2. Elije la forma</h3>
          <hr/>
          <h3>3. Elije el tamaño</h3>
          <hr/>

        </div>
      </div>
    );
  }
}

export default Pantalla2;
