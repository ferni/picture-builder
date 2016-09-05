import React, { Component } from 'react';

//A rectangular frame
class Frame extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = this.props.color;
        ctx.fillRect(0,0, 100, 100);
    }
    render() {
        return (
          <div>
          <h1>Color: {this.props.color}</h1>
            <canvas className="Frame" ref="canvas" width={300} height={300}/>
            </div>
        );
    }
}

export default Frame;
