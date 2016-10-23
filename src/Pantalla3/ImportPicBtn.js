import React, { Component } from 'react';
import './ImportPicBtn.css';

 class ImportPicBtn extends Component {
   render() {
     return (
       <div className="ImportPicBtn">
        <img src={this.props.iconSrc} height="50px"/>
        <label>{this.props.label}</label>
       </div>
     );
   }
 }

 export default ImportPicBtn;
