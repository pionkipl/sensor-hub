"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Devices", "deviceId", {
        type: Sequelize.STRING(50),
        allowNull: false
      }),
      queryInterface.changeColumn("Devices", "name", {
        type: Sequelize.STRING(500),
        allowNull: false
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("Devices", "deviceId", {
        type: Sequelize.STRING(50),
        allowNull: true
      }),
      queryInterface.changeColumn("Devices", "name", {
        type: Sequelize.STRING(500),
        allowNull: true
      })
    ]);
  }
};
