const Manufacturer = require("../db/connection").Manufacturers;
const Automobile = require("../db/connection").Automobiles;

var Service = {};

Service.listManufacturers = () => {
    return Manufacturer.findAll()
        .then(manufacturers => {
            return manufacturers;
        })
        .catch(error => {
            throw error;
        })
};

Service.listAutomobiles = () => {
    return Automobile.findAll()
        .then(automobiles => {
            return automobiles;
        })
        .catch(error => {
            throw error;
        })
};

module.exports = Service;