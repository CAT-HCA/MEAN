const Sequelize = require("sequelize");

const sequelize = new Sequelize("demo", "hca", "password", {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
});

const Manufacturers = sequelize.import("../models/Manufacturer");
const Automobiles = sequelize.import("../models/Automobile");

Automobiles.belongsTo(Manufacturers);
Manufacturers.hasMany(Automobiles);

sequelize.authenticate().then(() => {
    console.log("connected");
});

module.exports = {
    Sequelize,
    sequelize,
    Manufacturers,
    Automobiles
};