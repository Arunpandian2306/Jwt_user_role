const { DataTypes } = require('sequelize');
const sequelize = require('../DBConfig/connection');

const UserRole = sequelize.define('UserRole', {
  user_id: { 
    type: DataTypes.INTEGER, 
    references: { model: 'users', key: 'id' },
    field: 'user_id' 
  },
  role_id: { 
    type: DataTypes.INTEGER, 
    references: { model: 'roles', key: 'id' },
    field: 'role_id' 
  },
}, {
  tableName: 'user_roles',
  timestamps: false,
});

module.exports = UserRole;
