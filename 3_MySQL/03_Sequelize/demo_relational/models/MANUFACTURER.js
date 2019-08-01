/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MANUFACTURER', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    NAME: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'MANUFACTURER'
  });
};
