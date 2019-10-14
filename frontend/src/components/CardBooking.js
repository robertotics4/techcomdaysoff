import React from 'react';

import './cardBooking.css';

export default function CardBooking(props) {
  return (

    <div className="card-booking">
      <div className="group">
        <span className="label">DATA</span>
        <span className="text">{props.date}</span>
        <hr className="hr-row"/>
      </div>
      <div className="group">
        <span className="label">TÉCNICO</span>
        <span className="text">{props.user.nome}</span>
        <hr className="hr-row"/>
      </div>
      <div className="group">
        <span className="label">TURNO</span>
        <span className="text">{props.officeHour}</span>
      </div>
      
      <button
        className="btnExcluir">Desmarcar folga
      </button>
    </div>
  );
};