const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    officeHour: {
        type: String,
        enum: ['MATUTINO', 'VESPERTINO'],
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Booking', BookingSchema);