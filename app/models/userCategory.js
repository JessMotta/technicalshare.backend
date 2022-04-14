'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { }
  }
  UserCategories.init({
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserCategories',
  });
  return UserCategories;
};
