'use strict';
const bcrypt = require('bcryptjs');
const models = require('../models');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      namame: 'carlos',
      email: 'ejemplo@gmail.com',
      password: "$2y$08$W5uvFfIaCMzRDne1QOMzvut0vIPTYVoq4t9LxBAdKahTlBnAdEqDi",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

