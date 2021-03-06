import React, { Component } from 'react';
import CuadroPreview from '../CuadroPreview';
import BotonEstilo from './BotonEstilo.js';
import {Dropdown, Size, Shape, SizeAndShape} from '../Dropdown';
import NavButtons from '../NavButtons';

import './Pantalla2.css';
import single from'../img/simple.png';
import multiple from'../img/multiple.png';
import collage from'../img/collage.png';
import styles from '../styles-enum.js';

import nextIcon from '../img/icon-btn.png';
import singleImg from '../img/simple.png';

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
        <div style={{marginTop: 60}} >
          <h4>2. Elije forma y tamaño</h4>
          <hr/>
          <Dropdown>
            <SizeAndShape imgSrc={singleImg} tamaño="30 x 45" precio={170}
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
            <Shape imgSrc={singleImg} nombre="Forma"/>
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
        <div className="left-col">
          <h3>{this.props.my.material} {this.props.my.style} {this.props.my.shape} {this.props.my.size}</h3>
          <CuadroPreview config={this.props.my} enableImages={false} enableEffects={false}/>
        </div>
        <div className="right-col">
          <h4 style={{marginTop: 20}}>1. Elije el estilo de cuadro</h4>
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
          <NavButtons
            back="Cambiar material"
            forward="Subir fotos"
            //icon={nextIcon}
            onGoTo={this.props.onGoTo}
            currentScreen={2}
          />
        </div>
      </div>
    );
  }
}

export default Pantalla2;
