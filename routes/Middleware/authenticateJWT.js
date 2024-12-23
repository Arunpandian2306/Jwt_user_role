// routes/Middleware/authenticateJWT.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // 'Bearer <token>'
  const token = authHeader && authHeader.split(' ')[1]; // Get the token after "Bearer"

  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  // Verify the token using the secret key from the .env file
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.error('JWT verification error:', err);
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token has expired' });
      }
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;  // Attach user data to the request object
    next();  // Proceed to the next middleware or route handler
  });
};

module.exports = verifyToken;
