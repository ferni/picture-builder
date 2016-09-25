import React, { Component } from 'react';
import { Rect } from 'react-konva';

//A rectangular frame
class Frame extends Component {
  constructor(...args) {
    super(...args)
    this.handleDragEnd = this.handleDragEnd.bind(this)
  }
  handleDragEnd(e) {
    console.log(JSON.stringify(e.target))
  }
  render() {
      return (
        <Rect draggable={true}
            onDragend={this.handleDragEnd}
              x={10} y={10} width={50} height={50}
              fill={this.props.color}
              shadowBlur={10}
          />
      );
  }
}

export default Frame;
