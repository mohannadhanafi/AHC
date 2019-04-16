const Sequelize = require('sequelize');
const connection = require('../config');

const about = connection.define('about', {
  image: {
    type: Sequelize.TEXT,
    defaultValue: 'noPic',
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  desc: {
    type: Sequelize.TEXT,
  },
  body: {
    type: Sequelize.TEXT,
  },
  sub_title: {
    type: Sequelize.TEXT,
  },
  createdAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE,
  },
});

module.exports = about;
