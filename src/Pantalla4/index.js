import React, { Component } from 'react';
import './Pantalla4.css';
import NavButtons from '../NavButtons';

 class Pantalla4 extends Component {
   render() {
     return (
       <div className="Pantalla4">
       <NavButtons
         back="asdf"
         forward="qewr"
         onGoTo={this.props.onGoTo}
         currentScreen={4}
       />
       </div>
     );
   }
 }

 export default Pantalla4;
