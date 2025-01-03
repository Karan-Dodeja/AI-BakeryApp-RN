import express from 'express';
import { registerUser, loginUser, logoutUser, refreshToken, changePassword, deleteUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/refresh-token', refreshToken);
router.post('/change-password', changePassword);
router.delete('/delete-account', deleteUser);

export default router;