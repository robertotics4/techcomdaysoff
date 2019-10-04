const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.find().sort('-folgas');

        return res.json(users);
    },

    async show(req, res) {
        const id = req.query;

        const user = await User.findById(id);

        if (!user) {
            return res.status(400).json({ error: 'Usuário não encontrado.' });
        }

        return res.json(user);
    },

    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create(req.body);
        }

        return res.json(user);
    },

    async destroy(req, res) {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        return res.json(user);
    },

};
