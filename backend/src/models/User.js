const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    turno: {
        type: String,
        required: true,
        enum: ['MATUTINO', 'VESPERTINO', 'SUPERVISOR'],
    },
    folgas: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);