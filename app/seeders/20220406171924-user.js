module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Ana',
        password: '123456',
        email: 'ana@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marcos',
        password: '123456',
        email: 'marcos@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucas',
        password: '123456',
        email: 'lucas@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fernando',
        password: '123456',
        email: 'fernando@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marcia',
        password: '123456',
        email: 'marcia@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Joice',
        password: '123456',
        email: 'joice@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};