const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const Card = db.define('card', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mojo: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    stamina: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    imgURL: {
        type: DataTypes.STRING,
        allowNull: true
    },

});

module.exports = Card;