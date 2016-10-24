import React, { Component } from 'react';
import {Rect, Layer, Group} from 'react-konva';
import Img from './Img.js';
import blank from '../img/blank-canvas.png';

//A rectangular frame
class Frame extends Component {
  constructor(...args) {
    super(...args)
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
            stroke={this.props.selected ? 'blue' : 'black'}
            onClick={this.props.onClick}
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
              onClick={this.props.onClick}
            >
              <Img
                x={130}
                y={109}
                height={this.props.height}
                src={blank}
                scale={1.0}
                rotation={0}
                draggable={false}
              />
              {this.props.imgConfig ?
                <Img
                  x={this.props.imgConfig.x}
                  y={this.props.imgConfig.y}
                  src={this.props.imgConfig.src}
                  scale={this.props.imgConfig.scale}
                  rotation={this.props.imgConfig.rotation}
                  draggable={true}
                  onDragend={this.props.onDragend}
                /> :
                null
              }
            </Group>
          </Layer>
      );
  }
}

export default Frame;
