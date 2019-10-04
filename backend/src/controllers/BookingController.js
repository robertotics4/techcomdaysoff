const Booking = require('../models/Booking');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const bookings = await Booking.find().sort('-date');

        return res.json(bookings);
    },

    async store(req, res) {
        let booking = req.body;

        const user = await User.findById(booking.user);
        const booked = await Booking.findOne({ date: booking.date, officeHour: user.turno });

        if (!booked) {
            booking = await Booking.create(booking);
        } else {
            return res.json({ error: 'Date and time unavailable for booking.' });
        }

        return res.json(booking);
    }
};