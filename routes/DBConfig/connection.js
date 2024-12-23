const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('postgres', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres', 
  logging: false, 
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
