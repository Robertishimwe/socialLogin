'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      googleId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique:true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      googleId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        references: { model: 'user', key: 'googleId' }
        
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      education: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,

      }
      
    });



  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};