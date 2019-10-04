const Scheduled = require('../models/Scheduled');
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        const scheduled = req.body;
        const user = await User.findOne({ user });

        // Verificação da data
        const dateExists = await Scheduled.findOne({ data: scheduled.data });

    },

};