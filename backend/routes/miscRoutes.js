import express from 'express';
import { getRecommendations, addReview, getNotifications, getUserProfile, updateUserProfile } from '../controllers/miscController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/recommendations', protect, getRecommendations);
router.post('/reviews/:productId', protect, addReview);
router.get('/notifications', protect, getNotifications);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;