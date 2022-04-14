'use strict';

const { QueryTypes } = require('sequelize');


module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query("SELECT * FROM \"Users\"", { type: QueryTypes.SELECT });
    const categories = await queryInterface.sequelize.query("SELECT * FROM \"Categories\"", { type: QueryTypes.SELECT });

    let mapUserCategories = [];

    categories.forEach((category, index) => {
      const user = users[index];
      const rating = Math.floor(Math.random() * 5) + 1;
      if (user) {
        mapUserCategories.push({
          UserId: user.id,
          CategoryId: category.id,
          rating: rating < 3 ? 3 : rating,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    });

    return queryInterface.bulkInsert('UserCategories', mapUserCategories);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserCategories', null, {});
  }
};
