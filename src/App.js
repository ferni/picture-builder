import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pantalla1 from './Pantalla1.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pantalla: 1
    };
  }
  render() {
    return (
      <div className="App">
        <Pantalla1 />
      </div>
    );
  }
}
export default App;
