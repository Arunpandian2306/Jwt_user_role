const sequelize = require('../DBConfig/connection');
const User = require('./user');
const Role = require('./role');
const Permission = require('./permission');
const UserRole = require('./userRole');
const RolePermission = require('./rolePermission');

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });

module.exports = { sequelize, User, Role, Permission, UserRole, RolePermission };
