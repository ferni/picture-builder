import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import Image from 'react-image-file';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.2rem 0.2rem',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  cursor: 'move',
  float: 'left'
};

const boxSource = {
  beginDrag(props, monitor, component) {
    return {
      src: component.refs.theImage.state.src
    };
  }
};

@DragSource('img', boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class DraggableImage extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    file: PropTypes.string.isRequired
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;


    return (
      connectDragSource(
        <div style={{ ...style, opacity }}>
          <Image
            ref="theImage"
            file={this.props.file}
            alt='Ten presionado el botón izquierdo del mouse y arrastra hacia el cuadro'
            width={this.props.width}
            height={this.props.height}
          />
        </div>
      )
    );
  }
}
