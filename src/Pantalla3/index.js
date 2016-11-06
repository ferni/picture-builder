import React, { Component } from 'react';
import './Pantalla3.css';
import ImageUploads from './ImageUploads.js';
import BackBtn from '../NavButtons/BackBtn';
import ForwardBtn from '../NavButtons/ForwardBtn';
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
    this.updateImgConfig = this.updateImgConfig.bind(this);
    this.updateSelectedImage = this.updateSelectedImage.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.getZoomValue = this.getZoomValue.bind(this);
    this.getRotationValue = this.getRotationValue.bind(this);
    this.state = {
      selected: -1
    };
  }
  updateImgConfig(imgConfig) {
    this.props.onConfigChange(
      Object.assign({}, this.props.my, {images: imgConfig})
    );
  }
  updateSelectedImage(props) {
    if (this.state.selected === -1) {
      return;
    }
    let newImgConfigs = this.props.my.images.slice(0);
    Object.assign(newImgConfigs[this.state.selected], props);
    this.updateImgConfig(newImgConfigs);
  }
  handleZoomChange(e, value) {
    this.updateSelectedImage({scale: value});
  }
  handleRotationChange(e, value) {
    this.updateSelectedImage({rotation: value});
  }
  handleFrameSelected(index) {
    if (this.props.my.images[index]) {
      this.setState({selected: index});
    }
  }
  getZoomValue() {
    if (this.state.selected === -1) {
      return 0.1;
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
            <h3>{this.props.my.material} {this.props.my.style} {this.props.my.shape} {this.props.my.size}</h3>
            <CuadroPreview
              config={this.props.my}
              enableImages={true}
              imgConfigs={this.props.my.images}
              enableEffects={false}
              selectedFrame={this.state.selected}
              onSelected={this.handleFrameSelected}
              onChange={this.updateImgConfig}
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
                  min={0.1}
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
            <div className="NavButtons navigation-buttons">
              <BackBtn desc="Cambiar estilo" onClick={this.props.onGoTo.bind(null, 2)}/>
              <ForwardBtn desc="Elegir efectos" onClick={this.props.onGoTo.bind(null, 4)}/>
            </div>
          </div>
       </div>
     );
   }
}

 export default Pantalla3;
