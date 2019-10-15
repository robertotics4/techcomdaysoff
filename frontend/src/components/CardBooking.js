import React from 'react';

import './cardBooking.css';

export default function CardBooking(props) {
  
  let partsDate = props.date.split("/");
  let date = new Date(partsDate[2], partsDate[1] - 1, partsDate[0]);
  let currentDate = new Date();

  if (date < currentDate) {
    return (
      <div className="card-booking resolved">
        <div className="group">
          <span className="label">DATA</span>
          <span className="text">{props.date}</span>
          <hr className="hr-row" />
        </div>
        <div className="group">
          <span className="label">TÉCNICO</span>
          <span className="text">{props.user.nome}</span>
          <hr className="hr-row" />
        </div>
        <div className="group">
          <span className="label">TURNO</span>
          <span className="text">{props.officeHour}</span>
        </div>

        <div className="labelResolved">
          <span>Folga cumprida</span></div>
      </div>
    );
  }

  return (
    <div className="card-booking">
      <div className="group">
        <span className="label">DATA</span>
        <span className="text">{props.date}</span>
        <hr className="hr-row" />
      </div>
      <div className="group">
        <span className="label">TÉCNICO</span>
        <span className="text">{props.user.nome}</span>
        <hr className="hr-row" />
      </div>
      <div className="group">
        <span className="label">TURNO</span>
        <span className="text">{props.officeHour}</span>
      </div>

      <button
        className="btnExcluir"
        onClick={() => { }}
      >Desmarcar folga
        </button>
    </div>
  );
};