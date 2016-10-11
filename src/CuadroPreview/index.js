import React, { Component } from 'react';
import Frame from './Frame.js';
import {Stage} from 'react-konva';
import aluminiumImg from'../img/aluminium.jpg';

var styles = {
  sarasa: [
    {x: 10, y: 10, width: 200, height: 200},
    {x: 220, y: 10, width: 200, height: 200},
    {x: 10, y: 220, width: 200, height: 200},
    {x: 220, y: 220, width: 200, height: 200}
  ]
}

var imgConfigs = [
  {src: aluminiumImg, scale:0.5, rotation:1, x:10, y:20},
  {src: aluminiumImg, scale:1.5, rotation:0, x:-50, y:20},
  {src: aluminiumImg, scale:0.5, rotation:1.5, x:10, y:20},
  {src: aluminiumImg, scale:0.2, rotation:5, x:10, y:20}
]

function renderStyle(name) {
  return styles[name].map((s) => <Frame
    x={s.x}
    y={s.y}
    width={s.width}
    height={s.height}
    imgConfig={imgConfigs[styles[name].indexOf(s)]}
    key={styles[name].indexOf(s)}
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
        {renderStyle('sarasa')}
      </Stage>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
