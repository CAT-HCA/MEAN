module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AUTOMOBILE', {
        ID: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        MODEL: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        YEAR: {
            type: DataTypes.STRING(4),
            allowNull: false
        },
        MSRP: {
            type: DataTypes.STRING(6),
            allowNull: false
        }
    }, {
        tableName: 'AUTOMOBILE'
    });
};