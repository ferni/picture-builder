import React, { Component } from 'react';

class CuadroPreview extends Component {
  render() {
    var descripcion = JSON.stringify(this.props.config);
    return (
      <div>He aquí un cuadro: {descripcion}</div>
    );
  }
}

export default CuadroPreview;
