const User = require('../models').User;

// The Service uses the Sequelize ORM for DB CRUD operations
// and returns results to the calling Controller

var userService = {};

userService.list = () => {
    return User.findAll()
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

userService.register = (userObj) => {
    return User
        .create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.login = (userObj) => {
    return User.findOne({
            where: userObj
        })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.update = (userObj) => {
    return User.update({ password: userObj.password }, { returning: true, where: { user_name: userObj.user_name } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

userService.delete = (userId) => {
    return User.destroy({ where: { id: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        });
};

module.exports = userService;