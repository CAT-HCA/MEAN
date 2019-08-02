const connection = require("./connection");
const manufacturerData = require("./seed_data/manufacturer_data.json");
const automobileData = require("./seed_data/automobile_data.json");

connection.Manufacturers.destroy({ where: {} }).then(() => {
    connection.Manufacturers.bulkCreate(manufacturerData).then(() => {
        connection.Automobiles.destroy({ where: {} }).then(() => {
            connection.Automobiles.bulkCreate(automobileData).then(() => {
                process.exit();
            });
        });
    });
});