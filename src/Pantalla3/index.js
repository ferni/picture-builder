import React, { Component } from 'react';
import './Pantalla3.css';
import ImageUploads from './ImageUploads.js';
import NavButtons from '../NavButtons';
import CuadroPreview from '../CuadroPreview';
import Slider from 'material-ui/Slider';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import FontIcon from 'material-ui/FontIcon';

@DragDropContext(HTML5Backend)
class Pantalla3 extends Component {
  constructor(...args) {
    super(...args);
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.handleRotationChange = this.handleRotationChange.bind(this);
    this.handleFrameSelected = this.handleFrameSelected.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.getZoomValue = this.getZoomValue.bind(this);
    this.getRotationValue = this.getRotationValue.bind(this);
    this.state = {
      selected: -1
    };
  }
  handleZoomChange(e, value) {
    if (this.state.selected === -1) {
      return;
    }
    let newImgConfigs = this.props.my.images.slice(0);
    newImgConfigs[this.state.selected].scale = value;
    let newConfig = Object.assign({}, this.props.my, {images: newImgConfigs})
    this.props.onConfigChange(newConfig);
  }
  handleRotationChange(e, value) {
    if (this.state.selected === -1) {
      return;
    }
    let newImgConfigs = this.props.my.images.slice(0);
    newImgConfigs[this.state.selected].rotation = value;
    let newConfig = Object.assign({}, this.props.my, {images: newImgConfigs})
    this.props.onConfigChange(newConfig);
  }
  handleFrameSelected(index) {
    if (this.props.my.images[index]) {
      this.setState({selected: index});
    }
  }
  handlePreviewChange(imgConfigs) {
    let newConfig = Object.assign({}, this.props.my, {images: imgConfigs})
    this.props.onConfigChange(newConfig);
  }
  getZoomValue() {
    if (this.state.selected === -1) {
      return 0;
    }
    return this.props.my.images[this.state.selected].scale;
  }
  getRotationValue() {
    if (this.state.selected === -1) {
      return 0;
    }
    return this.props.my.images[this.state.selected].rotation;
  }
  handleDrop(index, src) {
    let newImgConfigs = this.props.my.images.slice(0);
    let selectedAux = this.state.selected;
    //clear img cache
    if (index == this.state.selected) {
      this.setState({selected: -1});
    }
    newImgConfigs[index] = null;
    this.props.onConfigChange(
      Object.assign({}, this.props.my, {images: newImgConfigs})
    );

    //add new img
    newImgConfigs[index] = {src, scale: 1.0, rotation: 0, x: 0, y: 0};
    this.props.onConfigChange(
      Object.assign({}, this.props.my, {images: newImgConfigs})
    );
    this.setState({selected: selectedAux});
  }
   render() {
     return (
       <div className="Pantalla3">
          <div className="left-col">
            <CuadroPreview
              config={this.props.my}
              enableImages={true}
              imgConfigs={this.props.my.images}
              enableEffects={false}
              selectedFrame={this.state.selected}
              onSelected={this.handleFrameSelected}
              onChange={this.handlePreviewChange}
              onDrop={this.handleDrop}
            />
            <div className="zoom-y-rotacion">
              <div className="slider-with-icon">
                <FontIcon className="material-icons float-left" color="grey">
                  zoom_out
                </FontIcon>
                <Slider
                  className="float-left"
                  style={{width: 330, marginTop: 0, marginBottom: 0}}
                  value={this.getZoomValue()}
                  onChange={this.handleZoomChange}
                  disabled={this.state.selected === -1}
                  step={0.02}
                />
                <FontIcon className="material-icons float-left" color="grey">
                  zoom_in
                </FontIcon>
              </div>
              <div className="slider-with-icon">
                <FontIcon className="material-icons float-left" color="grey">
                  rotate_left
                </FontIcon>
                <Slider
                  className="float-left"
                  style={{width: 330}}
                  value={this.getRotationValue()}
                  onChange={this.handleRotationChange}
                  disabled={this.state.selected === -1}
                  max={360}
                  step={1}
                />
                <FontIcon className="material-icons float-left" color="grey">
                  rotate_right
                </FontIcon>
              </div>
            </div>
          </div>
          <div className="right-col">
            <ImageUploads />
            <NavButtons
              back="Cambiar estilo"
              forward="Elegir efectos"
              onGoTo={this.props.onGoTo}
              currentScreen={3}
            />
          </div>
       </div>
     );
   }
}

 export default Pantalla3;
