// add your database connection here
const Sequelize = require('sequelize');
const path = require('path')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite')
})

module.exports = { sequelize }