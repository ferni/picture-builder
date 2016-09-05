import React, { Component } from 'react';
import Frame from './Frame.js';

class CuadroPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todosGrises: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('clicked');
    this.setState({todosGrises: true});
  }
  render() {
    var descripcion = JSON.stringify(this.props.config);
    return (
      <div onClick={this.handleClick}>
        <div>{descripcion}</div>
        <Frame color={this.state.todosGrises ? "gray": "red"}/>
        <Frame color="blue"/>
        <Frame color="yellow"/>
      </div>
    );
  }
}

export default CuadroPreview;
