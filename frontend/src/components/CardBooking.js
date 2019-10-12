import React from 'react';

import './cardBooking.css';

export default CardBooking => {
  return (
    <div className="card-booking">
      <div className="group">
        <span className="label">TURNO</span>
        <span className="text">Vespertino</span>
        <hr className="hr-row"/>
      </div>
      
      <div className="group">
        <span className="label">DATA</span>
        <span className="text">25/10/2019</span>
        <hr className="hr-row"/>
      </div>

      <div className="group">
        <span className="label">TÉCNICO</span>
        <span className="text">Roberto Oliveira</span>
      </div>

      <button className="btnExcluir">Desmarcar folga</button>
    </div>
  );
};