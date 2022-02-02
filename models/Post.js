const { Model, DataTypes } = require("sequelize");
const sequelize = require("sequelize");
const User = require("./User");
const markdown = require("markdown-js");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3],
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    hooks: {
      beforeCreate(newPostData) {
        newPostData.content = markdown.makeHtml(content);
        return newPostData;
      },
      beforeUpdate(updatedPostData) {
        updatedPostData.content = markdown.makeHtml(content);
        return updatedPostData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = Post;
