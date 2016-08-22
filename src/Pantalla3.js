import React, { Component } from 'react';
import './Pantalla3.css';
import BackBtn from './BackBtn.js';
import ForwardBtn from './ForwardBtn.js';

var listenerAdded = false;

class Pantalla3 extends Component {
   constructor(props) {
       super(props);
       this.handleForward = this.handleForward.bind(this);
   }
   handleForward() {
     var self = this;
     var editor = document.getElementById('editor-cuadro');
      editor.contentWindow.postMessage("dude, send me the state", "http://192.168.0.4:8080");
      function receiveMessage(event)
      {
        if (event.origin !== "http://192.168.0.4:8080")
          return;

        alert(JSON.stringify(event.data));
        self.props.onGoTo(4);
      }
      if (!listenerAdded) {
        window.addEventListener("message", receiveMessage, false);
        listenerAdded = true;
      }
   }
   render() {
     return (
       <div className="Pantalla3">
       <iframe id="editor-cuadro" src="http://192.168.0.4:8080/?medidaID=1" width="940" height="507"/>
         <div className="navigation-buttons">
           <BackBtn desc="Cambiar Tamaño" onClick={this.props.onGoTo.bind(null, 2)}/>
           <ForwardBtn desc="Editar Estilo" onClick={this.handleForward}/>
         </div>
       </div>
     );
   }
 }

 export default Pantalla3;
