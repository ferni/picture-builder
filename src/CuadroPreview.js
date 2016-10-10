import React, { Component } from 'react';
import Frame from './Frame.js';
import {Stage} from 'react-konva';
import aluminiumImg from'./img/aluminium.jpg';

var styles = {
  sarasa: [
    {x: 10, y: 10, width: 200, height: 200},
    {x: 220, y: 10, width: 200, height: 200},
    {x: 10, y: 220, width: 200, height: 200},
    {x: 220, y: 220, width: 200, height: 200}
  ]
}

function renderStyle(name) {
  return styles[name].map((s, index) => <Frame
    x={s.x}
    y={s.y}
    width={s.width}
    height={s.height}
    key={index}
    img={aluminiumImg}
    />
  );
}

class CuadroPreview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stage width={700} height={700}>
        {renderStyle('sarasa')} //this.props.config.style
      </Stage>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
