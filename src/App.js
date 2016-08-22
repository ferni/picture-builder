import React, { Component } from 'react';
import './App.css';

import Pantalla1 from './Pantalla1.js';
import Pantalla2 from './Pantalla2.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantalla: 1
    };
    this.handleIrAPantalla = this.handleIrAPantalla.bind(this);
    this.handleMaterialSelected = this.handleMaterialSelected.bind(this);
  }
  handleIrAPantalla(numero) {
    this.setState({pantalla: numero});
  }
  handleMaterialSelected(material) {
    this.setState({
      material: material,
      pantalla: 2
    });
  }
  render() {
    var pantallas =
    [
      <Pantalla1 onMaterialSelected={this.handleMaterialSelected}/>,
      <Pantalla2 material={this.state.material} onGoTo={this.handleIrAPantalla}/>
    ];

    return (
      <div className="App">
        {pantallas[this.state.pantalla - 1]}
      </div>
    );
  }
}
export default App;
