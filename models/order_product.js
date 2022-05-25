'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order_product.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: true,
    paranoid: true,
    modelName: 'order_product',
  });
  return order_product;
};