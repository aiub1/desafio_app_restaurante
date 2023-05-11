'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('restaurants', [{
      "id": 1,
      "name": "Sabor & Arte",
      "cnpj": "12345678901234",
      "since": "2000-01-01",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      "id": 2,
      "name": "Cozinha Criativa",
      "cnpj": "23456789012345",
      "since": "2001-02-02",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      "id": 3,
      "name": "Cantinho do Chef",
      "cnpj": "34567890123456",
      "since": "2002-03-03",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      "id": 4,
      "name": "Sabores do Mar",
      "cnpj": "45678901234567",
      "since": "2003-04-04",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      "id": 5,
      "name": "Sabores do Mar",
      "cnpj": "56789012345678",
      "since": "2004-05-05",
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
};
