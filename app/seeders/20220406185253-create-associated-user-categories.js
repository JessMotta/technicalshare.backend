'use strict';

const { QueryTypes } = require('sequelize');


module.exports = {
  async up(queryInterface, Sequelize) {

    const users = await queryInterface.sequelize.query("SELECT * FROM \"Users\"", { type: QueryTypes.SELECT });
    const categories = await queryInterface.sequelize.query("SELECT * FROM \"Categories\"", { type: QueryTypes.SELECT });

    let mapUserCategories = [];

    categories.forEach((category, index) => {
      const user = users[index];

      if (user) {
        mapUserCategories.push({
          UserId: user.id,
          CategoryId: category.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    });

    return queryInterface.bulkInsert('UserCategory', mapUserCategories);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
