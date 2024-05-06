const { DataTypes } = require('sequelize');
const { db } = require('../db/config');

const Deck = db.define('deck', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    xp: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

});

module.exports = Deck;