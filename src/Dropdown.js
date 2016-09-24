import React, { Component } from 'react';
import './Dropdown.css';
import FontIcon from 'material-ui/FontIcon';

var arrowStyle = {
  fontSize: '40px',
  marginTop: '10px'
}

class Dropdown extends Component {
  render() {
    return (
      <div className="Dropdown seleccionable">
        <div className="contenido">
          {this.props.children}
        </div>
        <div className="flechita">
          <FontIcon className="material-icons" color="white" style={arrowStyle}>
            keyboard_arrow_down
          </FontIcon>
        </div>
      </div>
    );
  }
}

export default Dropdown;
