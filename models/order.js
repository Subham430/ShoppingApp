'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    user_id: DataTypes.INTEGER,
    grand_total: DataTypes.DECIMAL,
    address: DataTypes.TEXT
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'order',
  });
  return order;
};