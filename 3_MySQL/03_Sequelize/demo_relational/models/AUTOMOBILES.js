/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AUTOMOBILES', {
    ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    MANUFACTURER_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'MANUFACTURER',
        key: 'ID'
      }
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
    tableName: 'AUTOMOBILES'
  });
};
