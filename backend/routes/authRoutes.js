import express from 'express';
import { registerUser, loginUser, logoutUser, refreshToken, changePassword, deleteUser, updateUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup',  registerUser);
router.post('/login', protect, loginUser);
router.post('/logout',  logoutUser);
router.post('/refresh-token', refreshToken);
router.post('/change-password', protect, changePassword);
router.delete('/delete-account',protect, deleteUser);
router.put('/update-profile', protect, updateUserProfile);

export default router;