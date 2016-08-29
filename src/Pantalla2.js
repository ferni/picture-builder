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
import single from'./img/simple.png';
import multiple from'./img/multiple.png';
import collage from'./img/collage.png';

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
            <BotonEstilo selected={this.state.style === styles.singlePrint}
              onClick={this.handleStyleClick.bind(null, styles.singlePrint)}
              nombre="Cuadro Simple" precioMinimo={60} imgSrc={single} />
            <BotonEstilo selected={this.state.style === styles.splitImage}
              onClick={this.handleStyleClick.bind(null, styles.splitImage)}
              nombre="Múltiple" precioMinimo={60} imgSrc={multiple} />
            <BotonEstilo selected={this.state.style === styles.collages}
              onClick={this.handleStyleClick.bind(null, styles.collages)}
              nombre="Collage" precioMinimo={60} imgSrc={collage} />
          </div><br />
          {sizeAndShape}
          <div className="navigation-buttons">
            <BackBtn desc="Cambiar Material" onClick={this.props.onGoTo.bind(null, 1)}/>
            <ForwardBtn desc="Subir Fotos" onClick={this.props.onGoTo.bind(null, 3)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Pantalla2;
