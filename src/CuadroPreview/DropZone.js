import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

const defaultStyle = {
  position: 'absolute',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  opacity: 0.6
};

const boxTarget = {
  drop(props, monitor, component) {
    component.props.onDrop(monitor.getItem().file);
  }
};

@DropTarget('img', boxTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))
export default class DropZone extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    var style = Object.assign(defaultStyle, this.props.style);

    let display = 'block';
    let backgroundColor = '#222';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'teal';
    } else {
      display = 'none';
    }

    return connectDropTarget(
      <div style={{ ...style, backgroundColor, display }}>
        {isActive ?
          'Suelta para colocar' :
          'Arrastra aquí'
        }
      </div>
    );
  }
}
