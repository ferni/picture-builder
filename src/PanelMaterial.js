import React, { Component } from 'react';
import './PanelMaterial.css';
import EnhancedButton from 'material-ui/internal/EnhancedButton';
import Paper from 'material-ui/Paper';

function capitalize(str) {
  var primera = str.substring(0, 1);
  primera = primera.toUpperCase();
  str = primera[0] + str.substring(1);
  return str;
}

class PanelMaterial extends Component {
  render() {
    var material = capitalize(this.props.material);
    return (
      <Paper className="PanelMaterial seleccionable" onTouchTap={this.props.onClick} zDepth="2">
        <EnhancedButton className="EnhancedButton">

              <img src={this.props.imgSrc} alt={'Seleccionar ' + material}/>
              <h4>{material}</h4>
              <p>{this.props.descripcion}</p>

        </EnhancedButton>
      </Paper>
    );
  }
}

export default PanelMaterial;
