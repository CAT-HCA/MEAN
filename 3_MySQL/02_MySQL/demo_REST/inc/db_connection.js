var mysql = require("promise-mysql");
var config = require('./config.json');

module.exports = {
    getDbConnection: function(callback, req, res) {
        mysql.createConnection({
            connectionLimit: config.connectionLimit,
            host: `${process.env.DB_HOST}`,
            user: `${process.env.DB_USER}`,
            password: `${process.env.DB_USER_PWD}`,
            database: `${process.env.DB_NAME}`,
            debug: config.debug
        }).then(function(conn) {
            callback(conn, req, res);
        }).catch(function(error) {
            console.log('Error establishing DB connection!');
            console.log(error);
            res.json({ 'success': false });
        });
    },
    closeDbConnection: function(con) {
        console.log('DB Connection closed!');
        con.end();
    }
};