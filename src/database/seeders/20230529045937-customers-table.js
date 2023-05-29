'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('customers', [
      {
        "id": 1,
        "name": "John Doe",
        "cpf": "12345678900",
        "birthday": "1974-04-06",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "cpf": "98765432100",
        "birthday": "1991-03-17",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 3,
        "name": "Alice Johnson",
        "cpf": "45678912300",
        "birthday": "1999-11-21",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 4,
        "name": "Bob Brown",
        "cpf": "78912345600",
        "birthday": "2007-12-21",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        "id": 5,
        "name": "Sarah Davis",
        "cpf": "32165498700",
        "birthday": "2002-01-06",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('customers', null, {})
  }
};
