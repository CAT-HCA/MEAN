const MANUFACTURER = require('../models').MANUFACTURER;

module.exports = {
    list(req, res) {
        return MANUFACTURER.findAll()
            .then(manufacturers => res.status(200).send(manufacturers))
            .catch(error => res.status(400).send(error));
    },
};