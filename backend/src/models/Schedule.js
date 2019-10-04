const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    bookings: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Booking',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Schedule', ScheduleSchema);