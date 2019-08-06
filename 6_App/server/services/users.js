const User = require("../db/connection").Users;

var Service = {};

Service.listUsers = () => {
    return User.findAll()
        .then(users => {
            return users;
        })
        .catch(error => {
            throw error;
        })
};

Service.listUser = (userId) => {
    return User.findByPk(userId)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.createUser = (userObj) => {
    return User.create(userObj)
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.updateUser = (userId, userObj) => {
    return User.update(
            userObj, { returning: true, where: { ID: userId } }
        )
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

Service.deleteUser = (userId) => {
    return User.destroy({ returning: true, where: { ID: userId } })
        .then(user => {
            return user;
        })
        .catch(error => {
            throw error;
        })
};

module.exports = Service;