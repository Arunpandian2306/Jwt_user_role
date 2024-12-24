const { DataTypes } = require('sequelize');
const sequelize = require('../DBConfig/connection');
//const Permission = require('./Permission');  
const Role = sequelize.define('Role', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  role_name: { type: DataTypes.STRING, unique: true, allowNull: false },
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: 'roles',
  timestamps: false,
});


module.exports = Role;
