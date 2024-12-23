const { DataTypes } = require('sequelize');
const sequelize = require('../DBConfig/connection');

const UserRole = sequelize.define('UserRole', {
  user_id: { 
    type: DataTypes.INTEGER, 
    references: { model: 'users', key: 'id' },
    field: 'user_id' // Explicitly map to database column
  },
  role_id: { 
    type: DataTypes.INTEGER, 
    references: { model: 'roles', key: 'id' },
    field: 'role_id' // Explicitly map to database column
  },
}, {
  tableName: 'user_roles',
  timestamps: false,
});

module.exports = UserRole;
