import React, { Component } from 'react';
import './Pantalla3.css';
import ImageUploads from './ImageUploads.js';

class Pantalla3 extends Component {
   render() {
     return (
       <div className="Pantalla3">
        <div className="panel-mitad">
        
        </div>
        <div className="panel-mitad">
          <ImageUploads />
        </div>
       </div>
     );
   }
}

 export default Pantalla3;
