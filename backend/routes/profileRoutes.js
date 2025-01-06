import express from 'express';
import { getUserProfile, updateUserProfile } from '../controllers/profileController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Route to get user profile
router.get('/', auth, getUserProfile);

// Route to update user profile
router.put('/', auth, updateUserProfile);

export default router;
