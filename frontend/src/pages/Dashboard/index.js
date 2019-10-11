import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function loadBookings() {
      const response = await api.get('bookings');
      setBookings(response.data);
    }

    loadBookings();
  }, []);

  return (
    <>
      <ul className="booking-list">
        {bookings.map(booking => (
          <li key={booking._id}>
            <header>
              {booking.date}
            </header>
            <span>Solicitada em {booking.createdAt}</span>
            <span>Turno: {booking.officeHour}</span>
            <strong>{booking.user.nome}</strong>
            <span>{booking.user.folgas} folgas disponíveis</span>
            <span>{booking.user.email}</span>
          </li>
        ))}
      </ul>
    </>
  );
}


/*
<p>Programe suas <strong>folgas</strong> e organize sua agenda.</p>
      <button
        className="btn"
        type="button"
        onClick={() => { }}
      >Marcar folga</button>
*/