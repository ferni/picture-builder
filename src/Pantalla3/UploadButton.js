

import React, { Component } from 'react';
//import './UploadButton.css';

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
         {React.createElement('input', {
           type: 'file',
           name: 'Subir imagenes',
           accept: 'image/*',
           onChange: this.handleChange,
           multiple: true
         })}
       </div>
     );
   }
 }

 export default UploadButton;
