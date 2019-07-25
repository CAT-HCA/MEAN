const User = require('../models').User;

module.exports = {
    list(req, res) {
        return User.findAll()
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error));
    },
    register(req, res) {
        return User
            .create({
                user_name: req.body.user_name,
                password: req.body.user_password
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    login(req, res) {
        return User.findOne({
                where: {
                    user_name: req.body.user_name,
                    password: req.body.user_password
                }
            })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User.update({ password: req.body.user_password }, { returning: true, where: { user_name: req.body.user_name } })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return User.destroy({ where: { id: req.params.user_id } })
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
};