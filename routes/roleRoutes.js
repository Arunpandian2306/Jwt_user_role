const express = require('express');
const { Role, Permission, RolePermission } = require('../routes/modles');
const { sequelize } = require('../routes/modles/index');
const verifyToken = require('../routes/Middleware/authenticateJWT');
const router = express.Router();

router.get('/',verifyToken, async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/',verifyToken, async (req, res) => {
  const { role_name } = req.body;
  try {
    const role = await Role.create({ role_name });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/:role_id/permissions', verifyToken, async (req, res) => {
  const { role_id } = req.params;
  const { permission_ids } = req.body;

  try {
    // Validate permission IDs
    const validPermissions = await sequelize.query(
      `
      SELECT id FROM permissions WHERE id IN (:permission_ids)
      `,
      {
        replacements: { permission_ids },
        type: sequelize.QueryTypes.SELECT,
      }
    );

    const validPermissionIds = validPermissions.map((permission) => permission.id);

    if (validPermissionIds.length !== permission_ids.length) {
      return res.status(400).json({ 
        error: "Some permissions do not exist.",
        invalidIds: permission_ids.filter(id => !validPermissionIds.includes(id)),
      });
    }

    // Insert valid permissions into role_permissions
    for (const permission_id of validPermissionIds) {
      await sequelize.query(
        `
        INSERT INTO role_permissions (role_id, permission_id)
        VALUES (:role_id, :permission_id)
        ON CONFLICT DO NOTHING;
        `,
        {
          replacements: { role_id, permission_id },
          type: sequelize.QueryTypes.INSERT,
        }
      );
    }

    res.status(200).json({ message: 'Permissions assigned to role successfully' });
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});



module.exports = router;
