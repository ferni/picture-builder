import React, { Component } from 'react';
import {Rect, Layer, Stage, Group} from 'react-konva';
import aluminiumImg from'./img/aluminium.jpg';
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
            x={100}
            y={40}
            width={50}
            height={50}
            shadowColor='black'
            shadowBlur={5}
            shadowOffset={{x : 2, y : 2}}
            shadowOpacity={0.8}
            stroke='black'
          />
            <Group clip={{
              x : 100,
              y : 40,
              width : 50,
              height : 50
            }}>

              <Img x={0} y={0} src={aluminiumImg} />
            </Group>
          </Layer>
      );
  }
}

export default Frame;
