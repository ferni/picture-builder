import React, { Component } from 'react';
import './ImageUploads.css';

 class ImageUploads extends Component {
   constructor(...args) {
     super(...args)
     this.handleClick = this.handleClick.bind(this)
     this.state = {};
   }
   handleClick() {
     var result = prompt('asdf');
     this.setState({img: result});
   }
   render() {
     return (
       <div className="ImageUploads">
        {this.state.img}
        <button onClick={this.handleClick}>Choose image</button>
       </div>
     );
   }
 }

 export default ImageUploads;
