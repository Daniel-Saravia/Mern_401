// routes/auth.js
import express from 'express';
import bcrypt from 'bcryptjs'; // Make sure to install bcryptjs if you haven't
import User from '../models/User.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      // Assuming you're using sessions or JWT for authentication
      // For JWT, you would generate a token here and send it back
      res.json({ message: "Login successful", user: { username: user.username } });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

