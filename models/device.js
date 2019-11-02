"use strict";
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define(
    "Device",
    {
      deviceId: DataTypes.STRING(50),
      name: DataTypes.STRING(50),
      description: DataTypes.STRING(500),
      locationName: DataTypes.STRING(50),
      locationLat: DataTypes.STRING(50),
      locationLon: DataTypes.STRING(50)
    },
    {}
  );
  Device.associate = function(models) {
    // associations can be defined here
  };
  return Device;
};
