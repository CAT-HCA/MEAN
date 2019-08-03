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

// GET: http://localhost:3000/inventory/manufacturers/:id
Controller.listManufacturer = (req, res) => {
    let manufacturerId = req.params.id;
    service.listManufacturer(manufacturerId)
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

// POST: http://localhost:3000/inventory/manufacturers
Controller.createManufacturer = (req, res) => {
    let manufacturerName = req.body.manufacturerName;
    service.createManufacturer({NAME: manufacturerName})
        .then((manufacturer) => {
            if (manufacturer) {
                res.json(manufacturer);
            } else {
                res.end('Manufacturer not created.');
            }
        })
        .catch((err) => {
            console.log(`Creating Manufacturer error: ${err}`);
            res.end('Creating Manufacturer error.');
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

// GET: http://localhost:3000/inventory/automobiles/:id
Controller.listAutomobilesFormanufacturer = (req, res) => {
    let manufacturerId = req.params.id;
    service.listAutomobilesFormanufacturer(manufacturerId)
        .then((automobiles) => {
            if (automobiles) {
                res.json(automobiles);
            } else {
                res.end('No Automobiles found for Manufacturer.');
            }
        })
        .catch((err) => {
            console.log(`Listing Automobiles for Manufacturer error: ${err}`);
            res.end('Listing Automobile for Manufacturer error.');
        });
};

// POST: http://localhost:3000/inventory/automobiles/:id
Controller.createAutomobileFormanufacturer = (req, res) => {
    let manufacturerId = req.params.id;
    let autoModel = req.body.autoModel;
    let autoYear = req.body.autoYear;
    let autoMSRP = req.body.autoMSRP;
    service.createAutomobileFormanufacturer(
        {
            MANUFACTURERID: manufacturerId,
            MODEL: autoModel,
            YEAR: autoYear,
            MSRP: autoMSRP,
        })
        .then((automobile) => {
            if (automobile) {
                res.json(automobile);
            } else {
                res.end('Automobile not created for Manufacturer.');
            }
        })
        .catch((err) => {
            console.log(`Creating Automobile for Manufacturer error: ${err}`);
            res.end('Creating Automobile for Manufacturer error.');
        });
};

// PUT: http://localhost:3000/inventory/automobiles/:id
Controller.updateAutomobile = (req, res) => {
    let automobileId = req.params.id;
    let autoModel = req.body.autoModel;
    let autoYear = req.body.autoYear;
    let autoMSRP = req.body.autoMSRP;
    service.updateAutomobile(automobileId,
        {
            MODEL: autoModel,
            YEAR: autoYear,
            MSRP: autoMSRP,
        })
        .then((automobile) => {
            if (automobile) {
                res.json(automobile);
            } else {
                res.end('Automobile not updated.');
            }
        })
        .catch((err) => {
            console.log(`Updateing Automobile error: ${err}`);
            res.end('Updateing Automobile error.');
        });
};

// DELETE: http://localhost:3000/inventory/automobiles/:id
Controller.deleteAutomobile = (req, res) => {
    let automobileId = req.params.id;
    service.deleteAutomobile(automobileId)
        .then((automobile) => {
            if (automobile) {
                res.json(automobile);
            } else {
                res.end('Automobile not updated.');
            }
        })
        .catch((err) => {
            console.log(`Updateing Automobile error: ${err}`);
            res.end('Updateing Automobile error.');
        });
};

module.exports = Controller;