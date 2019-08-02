var service = require('../services/service');

var Controller = {};

// GET: http://localhost:3000/inventory/manufacturers
Controller.listManufacturers = (req, res) => {
    service.listManufacturers()
        .then((manufacturers) => {
            if (manufacturers) {
                res.json(manufacturers);
            } else {
                res.end('No Manufacturers found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Manufacturers error: ${err}`);
            res.end('Listing Manufacturers error.');
        });
};

// GET: http://localhost:3000/inventory/automobiles
Controller.listAutomobiles = (req, res) => {
    service.listAutomobiles()
        .then((automobiles) => {
            if (automobiles) {
                res.json(automobiles);
            } else {
                res.end('No Automobilea found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Automobiles error: ${err}`);
            res.end('Listing Automobile error.');
        });
};


module.exports = Controller;