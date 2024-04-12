import React, { useState } from 'react';
//import './emg.css'
function PopupContainer() {
    const [showPopup, setShowPopup] = useState(false);
  
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
  
    return (
      <div>
        <div className="container" onClick={togglePopup}>
          {/* Contenido del contenedor que activa el aviso emergente */}
          <p >Informacion:</p>
        </div>
        {showPopup && (
          <div className="popup">
            {/* Contenido del aviso emergente */}
            <p>¡Este es un pokemon!</p>
           
          </div>
        )}
      </div>
    );
  }
  
  export default PopupContainer;