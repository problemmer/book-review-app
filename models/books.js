'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Books.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type : DataTypes.STRING,
      allowNull : false
    },
    about_author: { 
      type : DataTypes.STRING,
      allowNull : true
    },
    review: {
      type : DataTypes.STRING,
      allowNull : false
    },
    price: {
      type : DataTypes.STRING,
      allowNull : false
    },
    rating: {
      type : DataTypes.STRING,
      allowNull : false
    },
    picture: {
      type : DataTypes.STRING,
      allowNull : true
    }
  }, {
    sequelize,
    modelName: 'Books',
    // tableName: 'books',
    timestamps: true
  });
  return Books;
};