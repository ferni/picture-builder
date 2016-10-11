import React, { Component } from 'react';
import './Pantalla3.css';
import ImageUploads from './ImageUploads.js';
import NavButtons from '../NavButtons';
import CuadroPreview from '../CuadroPreview';

class Pantalla3 extends Component {
   render() {
     return (
       <div className="Pantalla3">
          <div className="panel-mitad">
            <CuadroPreview config={this.props.my} enableImages={true} enableEffects={false}/>
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
