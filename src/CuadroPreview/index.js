import React, { PropTypes, Component } from 'react';
import Frame from './Frame.js';
import {Stage, Rect, Layer} from 'react-konva';
import DropZone from './DropZone';

import cuadros from '../cuadros';

import { DropTarget } from 'react-dnd';


class CuadroPreview extends Component {
  constructor(props) {
    super(props);
    this.renderBackground = this.renderBackground.bind(this);
    this.renderImages = this.renderImages.bind(this);
    this.handleDragend = this.handleDragend.bind(this);
  }
  handleDragend(index, e) {
    let newImgConfigs = this.props.imgConfigs.slice(0);
    newImgConfigs[index].x = e.target.attrs.x;
    newImgConfigs[index].y = e.target.attrs.y;
    this.props.onSelected(index);
    this.props.onChange(newImgConfigs);
  }
  renderBackground(style) {
    let self = this;
    var backRects = cuadros[style].map((f) => {
      let index = cuadros[style].indexOf(f);
      let isSelected = self.props.selectedFrame === index;
      return <Rect
        x={f.x}
        y={f.y}
        width={f.width}
        height={f.height}
        shadowColor={isSelected ? 'green' : 'black'}
        shadowBlur={isSelected ? 8 : 5}
        shadowOffset={{x : 2, y : 2}}
        shadowOpacity={isSelected ? 1.0 : 0.8}
        fill="white"
        onClick={self.props.onSelected ? self.props.onSelected.bind(self, index) : function(){}}
      />
      }
    );
    return (
      <Layer>
        {backRects}
      </Layer>
    );
  }
  renderImages(name) {
    let self = this;
    let images = cuadros[name].map((f) => {
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
        onClick={self.props.onSelected ? self.props.onSelected.bind(self, index) : function(){}}
        key={index}
        />
      }
    );
    return (
      <Layer>
        {images}
      </Layer>
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
          {this.renderBackground(this.props.config.style)}
          {this.renderImages(this.props.config.style)}
        </Stage>
        {this.renderDropTargets(this.props.config.style)}
      </div>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
