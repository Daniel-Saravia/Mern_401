// routes/auth.js
import express from 'express';
const router = express.Router();

// Example login route
router.post('/login', async (req, res) => {
  // Implement login logic here
  res.send('Login route');
});

// Example registration route
router.post('/register', async (req, res) => {
  // Implement registration logic here
  res.send('Register route');
});

// Export the router as the default export
export default router;

