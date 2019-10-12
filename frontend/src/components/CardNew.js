import React from 'react';

import './cardNew.css';

import add from '../assets/add.png';

export default CardNew => {
  return(
    <div className="card-container">
      <img src={add} alt="Adicionar" className="img-add"/>
      <span>Nova reserva</span>
    </div>
  );
};