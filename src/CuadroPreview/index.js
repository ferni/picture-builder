import React, { PropTypes, Component } from 'react';
import Frame from './Frame.js';
import {Stage} from 'react-konva';
import DropZone from './DropZone';

import cuadros from '../cuadros';

import { DropTarget } from 'react-dnd';


class CuadroPreview extends Component {
  constructor(props) {
    super(props);
    this.renderStyle = this.renderStyle.bind(this);
    this.handleDragend = this.handleDragend.bind(this);
  }
  handleDragend(index, e) {
    let newImgConfigs = this.props.imgConfigs.slice(0);
    newImgConfigs[index].x = e.target.attrs.x;
    newImgConfigs[index].y = e.target.attrs.y;
    this.props.onSelected(index);
    this.props.onChange(newImgConfigs);
  }
  renderStyle(name) {
    let self = this;
    return cuadros[name].map((f) => {
      let index = cuadros[name].indexOf(f);
      return <Frame
        x={f.x}
        y={f.y}
        width={f.width}
        height={f.height}
        onDragend={this.handleDragend.bind(this, index)}
        imgConfig={self.props.enableImages ?
          this.props.imgConfigs[index] : null}
        selected={self.props.selectedFrame === index}
        onClick={self.props.onSelected ? self.props.onSelected.bind(this, index) : function(){}}
        key={index}
        />
      }
    );
  }
  renderDropTargets(name) {
    if (!this.props.enableImages || this.props.enableEffects) {
      return null;
    }
    var domPxRatio = 4 / 5;//for some reason dom px is different from konva px (some scaling thing?)
    return cuadros[name].map((f) => {
      let index = cuadros[name].indexOf(f);
      return <DropZone
        style={{
          left: f.x + 'px',
          top: f.y + 'px',
          width: (f.width * domPxRatio) + 'px',
          height: (f.height * domPxRatio) + 'px'
        }}
        key={index}
        onDrop={this.props.onDrop.bind(this, index)}
        />
      }
    );
  }
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return (
      <div className="CuadroPreview" style={{
        width: '100px',
        height: '100px',
        marginLeft: '30px',
        position: 'relative'
      }}>
        <Stage width={460} height={400}>
          {this.renderStyle(this.props.config.style)}
        </Stage>
        {this.renderDropTargets(this.props.config.style)}
      </div>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
