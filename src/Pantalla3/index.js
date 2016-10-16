import React, { Component } from 'react';
import './Pantalla3.css';
import ImageUploads from './ImageUploads.js';
import NavButtons from '../NavButtons';
import CuadroPreview from '../CuadroPreview';
import Slider from 'material-ui/Slider';

class Pantalla3 extends Component {
  constructor(...args) {
    super(...args);
    this.handleZoomChange = this.handleZoomChange.bind(this);
    this.handleFrameSelected = this.handleFrameSelected.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);
    this.state = {
      selected: -1
    };
  }
  handleZoomChange(e) {
    let newConfig = Object.assign({}, this.props.my, {zoom: e.target.value})
    this.props.onConfigChange(newConfig);
  }
  handleFrameSelected(index) {
    this.setState({selected: index});
  }
  handlePreviewChange(imgConfigs) {
    let newConfig = Object.assign({}, this.props.my, {images: imgConfigs})
    this.props.onConfigChange(newConfig);
  }
   render() {
     return (
       <div className="Pantalla3">
          <div className="panel-mitad">
            <CuadroPreview
              config={this.props.my}
              enableImages={true}
              imgConfigs={this.props.my.images}
              enableEffects={false}
              selectedFrame={this.state.selected}
              onSelected={this.handleFrameSelected}
              onChange={this.handlePreviewChange}
            />
            <div className="zoom-y-rotacion">
              <label>Zoom</label>
              <Slider style={{width: 200}} value={this.props.my.zoom} onChange={this.handleZoomChange}/>
              <label>Rotación</label>
              <Slider style={{width: 200}} defaultValue={0} />
            </div>
          </div>
          <div className="panel-mitad">
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
