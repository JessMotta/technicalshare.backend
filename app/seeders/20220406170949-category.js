module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Ux Researcher',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Front End',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Back End',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DevOps',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'UX Writer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'UX/UI Designer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SEO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};