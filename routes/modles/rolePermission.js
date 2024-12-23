const { DataTypes } = require('sequelize');
const sequelize = require('../DBConfig/connection');

const RolePermission = sequelize.define('RolePermission', {
  role_id: { 
    type: DataTypes.INTEGER, 
    references: { model: 'roles', key: 'id' },
    field: 'role_id' // Map to snake_case column
  },
  permission_id: { 
    type: DataTypes.INTEGER, 
    references: { model: 'permissions', key: 'id' },
    field: 'permission_id' // Map to snake_case column
  },
}, {
  tableName: 'role_permissions',
  timestamps: false,
});

module.exports = RolePermission;
