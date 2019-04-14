const Sequelize = require('sequelize');
const connection = require('../config');

const hours = connection.define('hours', {
    monday_start: Sequelize.DATE,
    monday_end: Sequelize.DATE,
    tuesday_start: Sequelize.DATE,
    tuesday_end: Sequelize.DATE,
    wednesday_start: Sequelize.DATE,
    wednesday_end: Sequelize.DATE,
    thursday_start: Sequelize.DATE,
    thursday_end: Sequelize.DATE,
    friday_start: Sequelize.DATE,
    friday_end: Sequelize.DATE,
    saturday_start: Sequelize.DATE,
    saturday_end: Sequelize.DATE,
    sunday_start: Sequelize.DATE,
    sunday_end: Sequelize.DATE,
});

module.exports = hours;
