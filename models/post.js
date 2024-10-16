"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { foreignKey: "UserId" });
      Post.hasMany(models.TagPost, { foreignKey: "PostId" });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      imageURL: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      like: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
