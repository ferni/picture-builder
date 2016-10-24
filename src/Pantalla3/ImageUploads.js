import React, { Component } from 'react';
import './ImageUploads.css';
import DraggableImage from './DraggableImage.js';
import ImportPicBtn from './ImportPicBtn';
import dropboxImg from '../img/import/dropbox.png';
import facebookImg from '../img/import/facebook.png';
import flickrImg from '../img/import/flickr.png';
import instagramImg from '../img/import/instagram.png';
import uploadImg from '../img/import/upload.png';
import UploadButton from './UploadButton';

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
       <DraggableImage file={file} width={85} height={85} />
     );
     return (
       <div className="ImageUploads">
         <h4>Elegí tus fotos</h4>
         <hr/>
         <div className="import-buttons">
           <UploadButton onChange={this.addFiles} />
           <ImportPicBtn iconSrc={facebookImg} label="Facebook" />
           <ImportPicBtn iconSrc={instagramImg} label="Instagram" />
           <ImportPicBtn iconSrc={dropboxImg} label="Dropbox" />
           <ImportPicBtn iconSrc={flickrImg} label="Flickr" />
         </div>
          <div className="images">
            {images}
          </div>
       </div>
     );

   }
 }

 export default ImageUploads;
