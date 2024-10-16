"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TagPost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TagPost.belongsTo(models.Post, { foreignKey: "PostId" });
      TagPost.belongsTo(models.Tag, { foreignKey: "TagId" });
    }
  }
  TagPost.init(
    {
      PostId: DataTypes.INTEGER,
      TagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "TagPost",
    }
  );
  return TagPost;
};
