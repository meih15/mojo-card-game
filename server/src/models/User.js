// create your User model here
const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const User = db.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;