const { config } = require('../config/config');

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: 'postgres',
  },
  production: {
    url: config.dbUrl,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
