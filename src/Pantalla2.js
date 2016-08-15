import React, { Component } from 'react';
import CuadroPreview from './CuadroPreview.js';
import BotonEstilo from './BotonEstilo.js';
import Dropdown from './Dropdown.js';

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
    this.handleStyleClick = this.handleStyleClick.bind(this);
  }
  getConfigCuadro() {
    return {
      material: this.props.material,
      style: this.state.style,
      shape: this.state.shape,
      size: this.state.size
    }
  }
  handleStyleClick(style) {
    this.setState({style});
  }
  render() {
    var sizeAndShape;
    if (this.state.style !== styles.collages) {
      sizeAndShape = (
        <div>
          <h3>2. Elije forma y tamaño</h3>
          <hr/>
          <Dropdown>
            <span>forma y tamaño</span>
          </Dropdown>
        </div>
      );
    } else {
      sizeAndShape = (
        <div>
          <h3>2. Elije la forma</h3>
          <hr/>
          <Dropdown>
            <span>stuff del dropdown</span>
          </Dropdown>
          <h3>3. Elije el tamaño</h3>
          <hr/>
        </div>
      );
    }
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
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.singlePrint)} nombre={styles.singlePrint} precioMinimo={14}/>
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.splitImage)} nombre={styles.splitImage} precioMinimo={16}/>
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.wallDisplays)} nombre={styles.wallDisplays} precioMinimo={18}/>
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.collages)} nombre={styles.collages} precioMinimo={134}/>
          </div><br />
          {sizeAndShape}

        </div>
      </div>
    );
  }
}

export default Pantalla2;
