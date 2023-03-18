'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.book)
      
      // db.comments.belongsTo(db.books, {
      //   foreignKey: "book_id",
      //   as: "Books",
      // });
    }
  }
  Comments.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    comment: {
      type : DataTypes.TEXT,
      allowNull : false
    },
    book_id: {
     type : DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'comment',
    tableName: 'comments',
    timestamps : true
  });
  return Comments;
};