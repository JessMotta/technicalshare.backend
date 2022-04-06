'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'UserCategory',
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
          type: Sequelize.UUID,
          primaryKey: true,
        },
        CategoryId: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('UserCategory');
  }
};
