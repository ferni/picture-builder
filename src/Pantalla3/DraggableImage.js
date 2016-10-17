import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import Image from 'react-image-file';

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.2rem 0.2rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left'
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      window.alert( // eslint-disable-line no-alert
        `You dropped ${item.name} into ${dropResult.name}!`
      );
    }
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
    name: PropTypes.string.isRequired
  };

  render() {
    const { isDragging, connectDragSource } = this.props;
    const { name } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return (
      connectDragSource(
        <div style={{ ...style, opacity }}>
          <Image
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
