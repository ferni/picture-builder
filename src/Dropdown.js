import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown seleccionable">
          {this.props.children}
        <div className="flechita">v</div>
      </div>
    );
  }
}

export default Dropdown;
