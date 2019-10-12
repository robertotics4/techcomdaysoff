import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './styles.css';
import CardNew from '../../components/CardNew';
import CardBooking from '../../components/CardBooking';

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
        <CardNew />
        {bookings.map(booking => (

          <li key={booking._id}>
            <CardBooking />
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