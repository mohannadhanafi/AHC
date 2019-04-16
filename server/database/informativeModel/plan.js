const Sequelize = require('sequelize');
const connection = require('../config');

const plan = connection.define('planta', {
  plan: {
    type: Sequelize.TEXT,
  },

});

module.exports = plan;
