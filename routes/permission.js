const express = require('express');
const { Permission } = require('../routes/modles');
const verifyToken = require('../routes/Middleware/authenticateJWT');
const router = express.Router();


router.post('/permissions', verifyToken, async (req, res) => {
    const { permission_name } = req.body;

    if (!permission_name) {
        return res.status(400).json({ error: 'Permission name is required.' });
    }

    try {
        const newPermission = await Permission.create({
            permission_name,
        });

        res.status(201).json({ message: 'Permission created successfully.', data: newPermission });
    } catch (error) {
        console.error('Error inserting permission:', error.message);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: 'Permission name already exists.' });
        }
        res.status(422).json({ error: error.message });
    }
});

router.get('/permissions', verifyToken, async (req, res) => {
    try {
        const permissions = await Permission.findAll({
            attributes: ['id', 'permission_name'],
            order: [['id', 'ASC']],
        });

        if (!permissions.length) {
            return res.status(404).json({ message: 'No permissions found.' });
        }

        res.status(200).json({ data: permissions });
    } catch (error) {
        console.error('Error fetching permissions:', error.message);
        res.status(422).json({ error: error.message });
    }
});



module.exports = router;
