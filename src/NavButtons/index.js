import React, { Component } from 'react';
import BackBtn from './BackBtn.js';
import ForwardBtn from './ForwardBtn.js';
import './NavButtons.css';

 class NavButtons extends Component {
   render() {
     return (
       <div className="NavButtons navigation-buttons">
         <BackBtn desc={this.props.back} onClick={this.props.onGoTo.bind(null, this.props.currentScreen - 1)}/>
         <ForwardBtn
           desc={this.props.forward}
           onClick={this.props.onGoTo.bind(null, this.props.currentScreen + 1)}
           imgSrc={this.props.icon}
         />
       </div>
     );
   }
 }

 export default NavButtons;
