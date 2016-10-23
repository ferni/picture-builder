

import React, { Component } from 'react';
import './UploadButton.css';
import uploadImg from '../img/import/upload.png';

 class UploadButton extends Component {
   constructor(...args) {
     super(...args);
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(evt) {
     var files = evt.target.files;
     this.props.onChange(files, evt.target.value);
   }
   render() {
     return (
       <div className="UploadButton">
         <label htmlFor="file" style={{
           backgroundImage: 'url(' + uploadImg + ')'
         }}>
           Subir Fotos
         </label>
         <input
            id='file'
            type='file'
            name='file'
            accept='image/*'
            onChange={this.handleChange}
            multiple={true}
            className="inputFile"
        />

       </div>
     );
   }
 }

 export default UploadButton;
