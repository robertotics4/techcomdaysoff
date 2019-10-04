const User = require('../models/User');

module.exports = {

    /* Método que lista todos os usuários */
    async index(req, res) {
        const users = await User.find().sort('-folgas');

        return res.json(users);
    },

    /* Método que exibe um único usuário */
    async show(req, res) {
        const { id } = req.params;

        const user = await User.findById(id).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        if (!user) {
            return res.status(400).json({ error: 'User not found.' });
        }

        return res.json(user);
    },

    /* Método que cria um usuário */
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email }).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        if (!user) {
            user = await User.create(req.body).catch(err => {
                return res.status(400).json({ error: err.message });
            });
        }

        return res.json(user);
    },

    /* Método que atualiza um usuário */
    async update(req, res) {
        const { id } = req.params;

        const user = await User.findByIdAndUpdate(id).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        return res.json(user);
    },

    /* Método que deleta um usuário */
    async destroy(req, res) {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        return res.json(user);
    },

};
