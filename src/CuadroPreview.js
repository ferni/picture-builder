import React, { Component } from 'react';
import Frame from './Frame.js';
import {Layer, Stage, Group, Image as KonvaImage} from 'react-konva';
import aluminiumImg from'./img/aluminium.jpg';
import Img from './Img.js';

class CuadroPreview extends Component {
  constructor(props) {
    super(props);
    var self = this;
    this.state = {
      todosGrises: false
    };
    this.handleClick = this.handleClick.bind(this);
    var imageObj = new Image();
    imageObj.onload = function() {
      self.setState({image: this})
    };
    imageObj.src = 'http://konvajs.github.io/assets/darth-vader.jpg';
  }
  handleClick() {
    console.log('clicked');
    this.setState({todosGrises: true});
  }
  render() {
    var descripcion = JSON.stringify(this.props.config);

    return (
      <Stage onClick={this.handleClick} width={700} height={700}>
        <Layer>
          <Group clip={{
            x : 100,
            y : 40,
            width : 50,
            height : 50
          }}>
            <Img x={0} y={0} src={aluminiumImg} />
            <Frame color="pink"/>
          </Group>
        </Layer>
      </Stage>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
