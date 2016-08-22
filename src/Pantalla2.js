import React, { Component } from 'react';
import CuadroPreview from './CuadroPreview.js';
import BotonEstilo from './BotonEstilo.js';
import Dropdown from './Dropdown.js';
import SizeAndShape from './dropdown-contents/SizeAndShape.js';
import Size from './dropdown-contents/Size.js';
import Shape from './dropdown-contents/Shape.js';
import BackBtn from './BackBtn.js';
import ForwardBtn from './ForwardBtn.js';

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
          <h4>2. Elije forma y tamaño</h4>
          <hr/>
          <Dropdown>
            <SizeAndShape imgSrc="tu-vieja" tamaño="30 x 45" precio={170}
              promoPorc={70} promoAhorro={396.9}/>
          </Dropdown>
        </div>
      );
    } else {
      sizeAndShape = (
        <div>
          <h4>2. Elije la forma</h4>
          <hr/>
          <Dropdown>
            <Shape imgSrc="tu-hermana" nombre="asdf"/>
          </Dropdown>
          <h4>3. Elije el tamaño</h4>
          <hr/>
          <Dropdown>
            <Size tamaño="30 x 45" precio={170}
              promoPorc={70} promoAhorro={396.9}/>
          </Dropdown>
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
          <h4>1. Elije el estilo</h4>
          <hr/>
          <div className="estilos">
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.singlePrint)} nombre={styles.singlePrint} precioMinimo={14}/>
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.splitImage)} nombre={styles.splitImage} precioMinimo={16}/>
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.wallDisplays)} nombre={styles.wallDisplays} precioMinimo={18}/>
            <BotonEstilo onClick={this.handleStyleClick.bind(null, styles.collages)} nombre={styles.collages} precioMinimo={134}/>
          </div><br />
          {sizeAndShape}
          <div className="navigation-buttons">
            <BackBtn desc="Cambiar material" onClick={this.props.onGoTo.bind(null, 1)}/>
            <ForwardBtn desc="Subir una foto" onClick={this.props.onGoTo.bind(null, 3)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Pantalla2;
