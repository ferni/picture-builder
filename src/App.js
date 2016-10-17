import React, { Component } from 'react';
import './App.css';

import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';
import Pantalla3 from './Pantalla3';
import Pantalla4 from './Pantalla4';
import styles from './styles-enum.js';

import aluminiumImg from'./img/aluminium.jpg';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantalla: 1,
      /*
        pictureConfig:
          - style: string
          - size:
          - shape:
          - images: array
          - effects: array
      */
      pictureConfig: {
        style: styles.singlePrint,
        images: [
          null,
          {src: aluminiumImg, scale:1.5, rotation:0, x:-50, y:20},
          {src: aluminiumImg, scale:0.5, rotation:1.5, x:10, y:20},
          {src: aluminiumImg, scale:0.2, rotation:5, x:10, y:20}
        ],
        effects: []
      }
    };
    this.handleIrAPantalla = this.handleIrAPantalla.bind(this);
    this.handleConfigChange = this.handleConfigChange.bind(this);
  }
  handleIrAPantalla(numero) {
    this.setState({pantalla: numero});
  }
  handleConfigChange(pictureConfig) {
    this.setState({ pictureConfig});
  }
  render() {
    var pantallas = [Pantalla1, Pantalla2, Pantalla3, Pantalla4].map(Pantalla =>
      <Pantalla
        onConfigChange={this.handleConfigChange}
        onGoTo={this.handleIrAPantalla}
        my={this.state.pictureConfig}
      />
    );

    return (
      <div className="App">
        {pantallas[this.state.pantalla - 1]}
      </div>
    );
  }
}
export default App;
