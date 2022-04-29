'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
       title: {
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
      },
      userId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('posts');
  }
};