const { Sequelize } = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = connection;
