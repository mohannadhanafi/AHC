const Sequelize = require('sequelize');
const connection = require('../config');

const titles = connection.define('titles', {
  coreTitle: Sequelize.TEXT,
  statisticstitle: Sequelize.TEXT,
  statisticsdesc: Sequelize.TEXT,
  promotitle: Sequelize.TEXT,
  promodesc: Sequelize.TEXT,
  plantitle: Sequelize.TEXT,
  plandesc: Sequelize.TEXT,
  planimage: Sequelize.TEXT,
  createdAt: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    defaultValue: Sequelize.NOW,
    type: Sequelize.DATE,
  },
});

module.exports = titles;
