import React, { Component } from 'react';
import CuadroPreview from '../CuadroPreview.js';
import BotonEstilo from './BotonEstilo.js';
import Dropdown from '../Dropdown.js';
import SizeAndShape from '../dropdown-contents/SizeAndShape.js';
import Size from '../dropdown-contents/Size.js';
import Shape from '../dropdown-contents/Shape.js';
import BackBtn from '../BackBtn.js';
import ForwardBtn from '../ForwardBtn.js';

import './Pantalla2.css';
import single from'../img/simple.png';
import multiple from'../img/multiple.png';
import collage from'../img/collage.png';
import styles from '../styles-enum.js';

class Pantalla2 extends Component {
  constructor(props) {
    super(props);
    this.handleStyleClick = this.handleStyleClick.bind(this);
  }
  handleStyleClick(style) {
    let newConfig = Object.assign({}, this.props.my, {style})
    this.props.onConfigChange(newConfig);
  }
  render() {
    var sizeAndShape;
    if (this.props.my.style !== styles.collages) {
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
          <h3>{this.props.my.material} {this.props.my.style}: {this.props.my.shape} {this.props.my.size}</h3>
          <CuadroPreview config={this.props.my}/>
        </div>
        <div className="panel-mitad">
          <h4>1. Elije el estilo de cuadro</h4>
          <hr/>
          <div className="estilos">
            <BotonEstilo selected={this.props.my.style === styles.singlePrint}
              onClick={this.handleStyleClick.bind(null, styles.singlePrint)}
              nombre="Simple" precioMinimo={60} imgSrc={single} />
            <BotonEstilo selected={this.props.my.style === styles.splitImage}
              onClick={this.handleStyleClick.bind(null, styles.splitImage)}
              nombre="Múltiple" precioMinimo={60} imgSrc={multiple} />
            <BotonEstilo selected={this.props.my.style === styles.collages}
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
