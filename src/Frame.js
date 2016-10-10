import React, { Component } from 'react';
import {Rect, Layer, Group} from 'react-konva';
import Img from './Img.js';

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
        <Layer>
          <Rect
            x={this.props.x}
            y={this.props.y}
            width={this.props.width}
            height={this.props.height}
            shadowColor='black'
            shadowBlur={5}
            shadowOffset={{x : 2, y : 2}}
            shadowOpacity={0.8}
            stroke='black'
          />
            <Group
              x={this.props.x}
              y={this.props.y}
              clip={{
                x: 0,
                y: 0,
                width: this.props.width,
                height: this.props.height
              }}
            >

              <Img x={0} y={0} src={this.props.img} />
            </Group>
          </Layer>
      );
  }
}

export default Frame;
