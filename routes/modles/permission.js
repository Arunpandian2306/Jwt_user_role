const { DataTypes } = require('sequelize');
const sequelize = require('../DBConfig/connection');
// const Role = require('./Role');  

const Permission = sequelize.define('Permission', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  permission_name: { type: DataTypes.STRING, unique: true, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: 'permissions',
  timestamps: false,
});

module.exports = Permission;
