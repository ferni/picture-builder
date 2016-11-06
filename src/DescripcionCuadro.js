import React, { Component } from 'react';

 class DescripcionCuadro extends Component {
   render() {
     return (
       <h3 className="DescripcionCuadro">
        {this.props.config.material} {this.props.config.style} {this.props.config.shape} {this.props.config.size}
       </h3>
     );
   }
 }

 export default DescripcionCuadro;
