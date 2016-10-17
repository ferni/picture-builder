import React, { PropTypes, Component } from 'react';
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

import { DropTarget } from 'react-dnd';

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left'
};

const boxTarget = {
  drop() {
    return { name: 'CuadroPreview' };
  }
};

@DropTarget('img', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
class CuadroPreview extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.renderStyle = this.renderStyle.bind(this);
    this.handleDragend = this.handleDragend.bind(this);
  }
  componentDidMount() {
    this.handleDrop();
  }
  componentDidUpdate() {
    this.handleDrop();
  }
  handleDrop() {
    var images = document.querySelectorAll('.images div');
    images.forEach(img => img.setAttribute("draggable", "true"));
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
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div className="CuadroPreview" style={{width: '100px', height: '100px'}}>
        <Stage width={460} height={400}>
          {this.renderStyle('sarasa')}
        </Stage>
      </div>
    );
  }
}

export default CuadroPreview;

//{this.state.image ? <KonvaImage x={50} y={50} image={this.state.image} draggable={true}/> : ''}
