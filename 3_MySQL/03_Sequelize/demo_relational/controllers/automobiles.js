const AUTOMOBILES = require('../models').AUTOMOBILES;

module.exports = {
    list(req, res) {
        return AUTOMOBILES.findAll()
            .then(automobiles => res.status(200).send(automobiles))
            .catch(error => res.status(400).send(error));
    },
};