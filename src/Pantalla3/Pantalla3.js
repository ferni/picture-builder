import React, { Component } from 'react';
import './Pantalla3.css';
import ImageUploads from './ImageUploads.js';
import BackBtn from '../BackBtn.js';
import ForwardBtn from '../ForwardBtn.js';

class Pantalla3 extends Component {
   render() {
     return (
       <div className="Pantalla3">
          <div className="panel-mitad">

          </div>
          <div className="panel-mitad">
            <ImageUploads />
            <div className="navigation-buttons">
              <BackBtn desc="Cambiar Material" onClick={this.props.onGoTo.bind(null, 2)}/>
              <ForwardBtn desc="Subir Fotos" onClick={this.props.onGoTo.bind(null, 4)}/>
            </div>
          </div>
       </div>
     );
   }
}

 export default Pantalla3;
