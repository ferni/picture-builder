import React, { PropTypes, Component } from 'react';
import Frame from './Frame.js';
import {Stage} from 'react-konva';
import DropZone from './DropZone';

var styles = {
  sarasa: [
    {x: 10, y: 10, width: 150, height: 150},
    {x: 170, y: 10, width: 150, height: 150},
    {x: 10, y: 170, width: 150, height: 150},
    {x: 170, y: 170, width: 150, height: 150}
  ]
}

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
    return styles[name].map((f) => {
      let index = styles[name].indexOf(f);
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
    if (!this.props.enableImages) {
      return null;
    }
    return styles[name].map((f) => {
      let index = styles[name].indexOf(f);
      return <DropZone
        style={{
          left: f.x + 'px',
          top: f.y + 'px',
          width: f.width + 'px',
          height: f.height + 'px'
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
      <div className="CuadroPreview" style={{width: '100px', height: '100px'}}>
        <Stage width={460} height={400}>
          {this.renderStyle('sarasa')}
        </Stage>
        {this.renderDropTargets('sarasa')}
      </div>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
