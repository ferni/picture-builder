import React, { Component } from 'react';
import './Pantalla4.css';
import NavButtons from '../NavButtons';
import CuadroPreview from '../CuadroPreview';
import DescripcionCuadro from '../DescripcionCuadro';
 class Pantalla4 extends Component {
   constructor(...args) {
     super(...args);
     this.handleFrameSelected = this.handleFrameSelected.bind(this);
     this.state = {
       selected: -1
     };
   }
   handleFrameSelected(index) {
     if (this.props.my.images[index]) {
       this.setState({selected: index});
     }
   }
   render() {
     return (
       <div className="Pantalla4">
         <div className="left-col">
         <DescripcionCuadro config={this.props.my} />
         <CuadroPreview
           config={this.props.my}
           enableImages={true}
           enableEffects={true}
           imgConfigs={this.props.my.images}
           selectedFrame={this.state.selected}
           onSelected={this.handleFrameSelected}
         />
         </div>
         <div className="right-col">
           <NavButtons
             back="Cambiar fotos"
             forward="Revisar detalles"
             onGoTo={this.props.onGoTo}
             currentScreen={4}
           />
         </div>
       </div>
     );
   }
 }

 export default Pantalla4;
