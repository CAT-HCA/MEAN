module.exports = function(sequelize, DataTypes) {
    return sequelize.define('USER', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        USER_NAME: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        EMAIL_ADDRESS: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        PASSWORD: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: false
        }
    }, {
        tableName: 'USER'
    });
};