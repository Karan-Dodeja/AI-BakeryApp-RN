import express from 'express';
import { getUserProfile, updateUserProfile, deleteUser, updateUserEmail, updateUserPhone } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/email', protect, updateUserEmail);
router.put('/phone', protect, updateUserPhone);
router.delete('/delete', protect, deleteUser);

export default router;