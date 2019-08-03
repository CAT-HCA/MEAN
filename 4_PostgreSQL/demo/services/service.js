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

Service.listManufacturer = (manufacturerId) => {
    return Manufacturer.findByPk(manufacturerId)
        .then(manufacturer => {
            return manufacturer;
        })
        .catch(error => {
            throw error;
        })
};

Service.createManufacturer = (manufacturerObj) => {
    return Manufacturer.create(manufacturerObj)
        .then(manufacturer => {
            return manufacturer;
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

Service.listAutomobilesFormanufacturer = (manufacturerId) => {
    return Manufacturer.findByPk(manufacturerId, {
        include: [{
          model: Automobile
        }]
      })
        .then(automobiles => {
            return automobiles;
        })
        .catch(error => {
            throw error;
        })
};

Service.createAutomobileFormanufacturer = (automobileObj) => {
    return Automobile.create(automobileObj)
        .then(automobile => {
            return automobile;
        })
        .catch(error => {
            throw error;
        })
};

Service.updateAutomobile = (automobileId, automobileObj) => {
    return Automobile.update(
        automobileObj,
        {returning: true, where: {ID: automobileId} }
        )
        .then(automobile => {
            return automobile;
        })
        .catch(error => {
            throw error;
        })
};

Service.deleteAutomobile = (automobileId) => {
    return Automobile.destroy(
        {returning: true, where: {ID: automobileId} }
        )
        .then(automobile => {
            return automobile;
        })
        .catch(error => {
            throw error;
        })
};

module.exports = Service;