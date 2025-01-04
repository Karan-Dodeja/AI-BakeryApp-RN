import express from 'express';
import { getDashboard, createPromotion, getAllUsers, deleteUser, getUserById, updateUserRole } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/dashboard', protect, admin, getDashboard);
router.post('/promotions', protect, admin, createPromotion);
router.get('/users', protect, admin, getAllUsers);
router.delete('/users/:id', protect, admin, deleteUser);
router.get('/users/:id', protect, admin, getUserById);
router.put('/users/:id', protect, admin, updateUserRole);

export default router;