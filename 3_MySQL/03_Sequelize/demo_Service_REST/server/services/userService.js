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

userService.update = (userObj) => {
    return User.update({ user_name: userObj.userName, email: userObj.email }, { returning: true, where: { id: userObj.id } })
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