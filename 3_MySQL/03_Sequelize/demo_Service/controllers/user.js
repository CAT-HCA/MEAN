// require new custom Service Module
var userService = require('../services/userService');

var UserController = {};

// GET: http://localhost:3000/users/
UserController.list = (req, res) => {
    userService.list()
        .then((users) => {
            if (users) {
                res.json(users);
            } else {
                res.end('No Users found.');
            }
        })
        .catch((err) => {
            console.log(`Listing Users error: ${err}`);
            res.end('Listing Users error.');
        });
};

// POST: http://localhost:3000/users/register/
UserController.register = (req, res) => {
    userService.register({
            user_name: req.body.user_name,
            password: req.body.user_password
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Creating User error: ${err}`);
            res.end('Creating User error.');
        });
};

// POST: http://localhost:3000/users/login/
UserController.login = (req, res) => {
    userService.login({
            user_name: req.body.user_name,
            password: req.body.user_password
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Reading User error: ${err}`);
            res.end('Reading User error.');
        });
};

// PUT: http://localhost:3000/users/
UserController.update = (req, res) => {
    userService.update({
            user_name: req.body.user_name,
            password: req.body.user_password
        })
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Updating User error: ${err}`);
            res.end('Updating User error.');
        });
};

// DELETE: http://localhost:3000/users/{user_id} 
UserController.delete = (req, res) => {
    userService.delete(req.params.user_id)
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            console.log(`Deleting User error: ${err}`);
            res.end('Deleting User error.');
        });
};

module.exports = UserController;