const express = require('express');
// const { User, Role, Permission } = require('../routes/modles');
const { sequelize } = require('../routes/modles/index');
const verifyToken = require('../routes/Middleware/authenticateJWT');
const router = express.Router();
const userQueries = require('./Query/UserQuery');


router.get('/', verifyToken, async (req, res) => {
  try {
    const usersWithRoles = await sequelize.query(userQueries.getAllUsersWithRoles, {
      type: sequelize.QueryTypes.SELECT,
    });

    res.status(200).json(usersWithRoles);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});



router.get('/:user_id', verifyToken, async (req, res) => {
  const { user_id } = req.params;
  try {
    const userPermissions = await sequelize.query(userQueries.getUserPermissionsById, {
      replacements: { user_id },
      type: sequelize.QueryTypes.SELECT,
    });

    if (!userPermissions.length) {
      return res.status(404).json({ error: 'User not found or no permissions assigned' });
    }

    res.status(200).json(userPermissions);
  } catch (error) {
    console.error('Error fetching user permissions:', error.message);
    res.status(422).json({ error: error.message });
  }
});


module.exports = router;
