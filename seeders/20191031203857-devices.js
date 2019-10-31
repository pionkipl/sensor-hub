"use strict";

const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakeDevices = [];
    for (let i = 0; i < 100; i++) {
      const recentDate = new faker.date.recent();

      fakeDevices.push({
        deviceId: faker.random.alphaNumeric(10),
        name: faker.random.word(),
        description: faker.lorem.words(10),
        locationName: faker.address.city(),
        locationLat: faker.address.latitude(),
        locationLon: faker.address.longitude(),
        createdAt: recentDate,
        updatedAt: recentDate
      });
    }

    return queryInterface.bulkInsert("Devices", fakeDevices, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Devices", null, {});
  }
};
