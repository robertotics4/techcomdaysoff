const mongoose = require('mongoose');

const ScheduledSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Scheduled', ScheduledSchema);