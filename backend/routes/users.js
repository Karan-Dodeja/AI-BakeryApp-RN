import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ email, password: hashedPassword, name });
  await user.save();
  res.status(201).send('User created');
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).send('Invalid credentials');
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});

// Get User Profile
router.get('/profile', async (req, res) => {
  const user = await User.findById(req.user.userId);
  res.send(user);
});

// Update User Profile
router.put('/profile', async (req, res) => {
  const { name, dietaryPreferences, allergens } = req.body;
  const user = await User.findByIdAndUpdate(req.user.userId, { name, dietaryPreferences, allergens }, { new: true });
  res.send(user);
});

// Update User Phone
router.put('/phone', async (req, res) => {
  const { phone } = req.body;
  const user = await User.findByIdAndUpdate(req.user.userId, { phone }, { new: true });
  res.send(user);
});

module.exports = router;
