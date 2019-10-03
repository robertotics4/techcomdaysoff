const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const users = await User.find().sort('-createdAt');

        return res.json(users);
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
        const { id } = req.params.id;

        const user = await User.deleteOne({ id });

        return res.json(user);
    },

};
