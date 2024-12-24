const getAllUsersWithRoles = `
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
`;

const getUserPermissionsById = `
  SELECT 
    u.id AS userId,
    u.username AS userName,
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
`;

module.exports = {
  getAllUsersWithRoles,
  getUserPermissionsById,
};
