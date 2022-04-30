'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' })
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    }
    toJSON(){
      return { ...this.get(), id: undefined, userId: undefined, postId: undefined }
    }
  }
  Comment.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
     type: DataTypes.STRING,
     allowNull: false
    }
},
{
    sequelize,
    modelName: 'Comment',
    tableName: 'comments'
  });
  return Comment;
};