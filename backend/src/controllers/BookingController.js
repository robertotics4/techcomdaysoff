const Booking = require('../models/Booking');
const User = require('../models/User');

module.exports = {

    /* Método que retorna todas as reservas cadastradas no banco de dados */
    async index(req, res) {
        const bookings = await Booking.find().sort('-date').populate('user');

        return res.json(bookings);
    },

    /* Médoto que retorna uma reserva que está salva no banco de dados */
    async show(req, res) {
        const { id } = req.params;

        const booking = await Booking.findById(id).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        if (!booking) {
            return res.status(400).json({ error: 'Booking not found.' });
        }

        return res.json(booking);
    },

    /* Método que cria uma reserva no banco de dados */
    async store(req, res) {
        let booking = req.body;

        const user_id = booking.user;

        let user = await User.findById(user_id).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        const booked = await Booking.findOne({ date: booking.date, officeHour: user.turno });

        if (!booked) {
            /* Criando a reserva no banco de dados */
            booking = await Booking.create(booking);

            user = await User.findOne({ _id: user_id }, (err, doc) => {
                if (doc) {
                    /* Atualizando as folgas */
                    doc.folgas = doc.folgas - 1;
                    doc.save();
                } else {
                    return res.status(400).json({ error: err.message });
                }
            });

            /* Populando o objeto user para uma melhor visualização */
            await booking.populate('user').execPopulate();

        } else {
            return res.json({ error: 'Date and time unavailable for booking.' });
        }

        return res.json(booking);
    },

    /* Método que deleta uma reserva do banco de dados */
    async destroy(req, res) {
        const { id } = req.params;

        const booking = await Booking.findByIdAndDelete(id).catch(err => {
            return res.status(400).json({ error: err.message });
        });

        if (booking) {
            const user_id = booking.user;

            let user = await User.findOne({ _id: user_id }, (err, doc) => {
                if (doc) {
                    doc.folgas = doc.folgas + 1;
                    doc.save();
                } else {
                    return res.status(400).json({ error: err.message });
                }
            });
        }

        return res.json(booking);
    },


};