import React, { Component } from 'react';
import './App.css';

import Pantalla1 from './Pantalla1.js';
import Pantalla2 from './Pantalla2.js';
import Pantalla3 from './Pantalla3.js';
import Pantalla4 from './Pantalla4.js';
import styles from './styles-enum.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantalla: 1,
      pictureConfig: {
        style: styles.singlePrint
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
