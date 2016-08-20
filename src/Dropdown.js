import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown seleccionable">
        <div className="contenido">
          {this.props.children}
        </div>
        <div className="flechita">v</div>
      </div>
    );
  }
}

export default Dropdown;
