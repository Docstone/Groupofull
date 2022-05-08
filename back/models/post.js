'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
      this.hasMany(models.Comment, { foreignKey: 'postId', as: 'comments', onDelete: 'cascade',  hooks: true })

    }
    toJSON(){
      return { ...this.get(), id: undefined, userId: undefined , postId: undefined, }
    }
  }
  Post.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: {
      type : DataTypes.STRING,
      allowNull: false
    },
    body: {
      type : DataTypes.STRING,
      allowNull: false
    }, 
    type: {
      type : DataTypes.STRING,
      allowNull: false
    },
    mediaUrl: {
      type : DataTypes.STRING,
      allowNull: true 
    }
  }, {
    sequelize,
    tableName: 'posts',
    modelName: 'Post',
  });
  return Post;
};