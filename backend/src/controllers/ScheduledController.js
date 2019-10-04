const Scheduled = require('../models/Scheduled');
const User = require('../models/User');

module.exports = {

    async store(req, res) {
        let scheduled = req.body;
        const user = await User.findById(req.body.user);

        // Verificando se existe reserva
        scheduled = await Scheduled.find({ data: scheduled.data }, (err, item) => {
            if (!user.turno === item.user.turno) {
                scheduled = await Scheduled.create(scheduled);
            }
        });

        return res.json(scheduled);
    },

};