import React, {Component} from 'react';
import './BotonEstilo.css';
import EnhancedButton from 'material-ui/internal/EnhancedButton.js';
class BotonEstilo extends Component {
  render() {
    return (
      <div className={"BotonEstilo seleccionable" + (this.props.selected ? ' selected' : '')}
        onTouchTap={this.props.onClick}>
        <EnhancedButton className="EnhancedButton">

            <img src={this.props.imgSrc} alt={this.props.descripcion}/><br/>
            <h3>{this.props.nombre}</h3>
            <p>Desde ${this.props.precioMinimo}</p>
        </EnhancedButton>
      </div>
    );
  }
}

export default BotonEstilo;
