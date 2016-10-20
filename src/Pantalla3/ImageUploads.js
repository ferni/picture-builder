import React, { Component } from 'react';
import './ImageUploads.css';
import { ImageUploadField,UploadField} from 'react-image-file';
import DraggableImage from './DraggableImage.js';

 class ImageUploads extends Component {
   constructor(...args) {
     super(...args)
     this.addFiles = this.addFiles.bind(this);
     this.state = {
       files: []
     };
   }
   addFiles(files) {
     console.log(files);
     var allFiles = this.state.files;
     for (var i = 0; i < files.length; i++) {
       allFiles.push(files[i]);
     }
     this.setState({files: allFiles});
     console.log(this.state.files);
   }
   render() {
     var images = this.state.files.map(file =>
       <DraggableImage file={file} width={100} height={100} />
     );
     return (
       <div className="ImageUploads">
        <div className="images">
          {images}
        </div>
        <ImageUploadField
            label='upload images'
            imageWidth={50}
            imageHeight={50}
            multiple
            onChange={this.addFiles}
        />
       </div>
     );

   }
 }

 export default ImageUploads;
