const express = require('express');
const { User, Role, Permission } = require('../routes/modles');
const { sequelize } = require('../routes/modles/index');
const verifyToken = require('../routes/Middleware/authenticateJWT');
const router = express.Router();


router.get('/', verifyToken, async (req, res) => {
  try {
    console.log('Token verified. Fetching users...');

    const usersWithRoles = await sequelize.query(
      `
      SELECT 
        u.id AS userId,
        u.username,
        r.id AS roleId,
        r.role_name AS roleName
      FROM 
        users u
      LEFT JOIN 
        user_roles ur ON u.id = ur.user_id
      LEFT JOIN 
        roles r ON ur.role_id = r.id
      `,
      { type: sequelize.QueryTypes.SELECT }
    );

    res.status(200).json(usersWithRoles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



router.get('/:user_id', verifyToken, async (req, res) => {
  const { user_id } = req.params;
  try {
    console.log('Token verified. Fetching user by ID...');

    const userPermissions = await sequelize.query(
      `
      SELECT 
          r.id AS roleId,
          r.role_name AS roleName,
          p.id AS permissionId,
          p.permission_name AS permissionName
      FROM 
          users u
      LEFT JOIN 
          user_roles ur ON u.id = ur.user_id
      LEFT JOIN 
          roles r ON ur.role_id = r.id
      LEFT JOIN 
          role_permissions rp ON r.id = rp.role_id
      LEFT JOIN 
          permissions p ON rp.permission_id = p.id
      WHERE 
          u.id = :user_id;
      `,
      {
        replacements: { user_id },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    if (!userPermissions.length) {
      return res.status(404).json({ error: 'User not found or no permissions assigned' });
    }

    // Group permissions by role
    const groupedPermissions = userPermissions.reduce((acc, row) => {
      if (!acc[row.roleId]) {
        acc[row.roleId] = {
          roleId: row.roleId,
          roleName: row.roleName,
          permissions: [],
        };
      }
      acc[row.roleId].permissions.push({
        permissionId: row.permissionId,
        permissionName: row.permissionName,
      });
      return acc;
    }, {});

    res.status(200).json(Object.values(groupedPermissions));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
