import React, { Component } from 'react';
import Frame from './Frame.js';
import {Stage} from 'react-konva';

var styles = {
  sarasa: [
    {x: 10, y: 10, width: 150, height: 150},
    {x: 170, y: 10, width: 150, height: 150},
    {x: 10, y: 170, width: 150, height: 150},
    {x: 170, y: 170, width: 150, height: 150}
  ]
}

class CuadroPreview extends Component {
  constructor(props) {
    super(props);
    this.renderStyle = this.renderStyle.bind(this);
  }
  renderStyle(name) {
    let self = this;
    return styles[name].map((s) => {
      let index = styles[name].indexOf(s);
      return <Frame
        x={s.x}
        y={s.y}
        width={s.width}
        height={s.height}
        imgConfig={self.props.enableImages ?
          this.props.imgConfigs[index] : null}
        selected={self.props.selectedFrame === index}
        onClick={self.props.onSelected ? self.props.onSelected.bind(this, index) : function(){}}
        key={index}
        />
      }
    );
  }
  render() {
    return (
      <Stage width={700} height={700}>
        {this.renderStyle('sarasa')}
      </Stage>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
