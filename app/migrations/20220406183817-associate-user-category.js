'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'UserCategories',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        UserId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        CategoryId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        rating: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserCategories');
  }
};
