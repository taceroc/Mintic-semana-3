'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      namame: 'carlos',
      email: 'ejemplo@gmail.com',
      password:
        '$2y$08$UJL1Cx9ELiFDZKgfnSURxuOf/uv7WqpxVTu3Q6vpA.HKVOkwq4bIm',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

