import React, { Component } from 'react';

import './Pantalla2.css';

class Pantalla2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Pantalla2">
        <h1>Pantalla 2</h1>
        <p>Material seleccionado: {this.props.material}</p>
      </div>
    );
  }
}

export default Pantalla2;
