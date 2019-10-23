const Sequelize = require("sequelize");

initConnection = () => {
  const sequelize = new Sequelize("sensorhub", "usr", "pass", {
    host: "localhost",
    dialect: "postgres"
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database: ", err);
    });
};

module.exports = { initConnection };
