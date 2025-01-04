import express from 'express';
import { getDashboard, createPromotion, getAllUsers, deleteUser, getUserById, updateUserRole, addProduct, updateProduct, removeProduct, viewOrders, processOrder, trackInventory, manageFeedback, sendPushNotification, getAnalyticsDashboard, createDiscountCode, getDiscountCodes, deleteDiscountCode } from '../controllers/adminController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/dashboard', protect, admin, getDashboard);
router.post('/promotions', protect, admin, createPromotion);
router.get('/users', protect, admin, getAllUsers);
router.delete('/users/:id', protect, admin, deleteUser);
router.get('/users/:id', protect, admin, getUserById);
router.put('/users/:id', protect, admin, updateUserRole);

router.post('/products', protect, admin, addProduct);
router.put('/products/:id', protect, admin, updateProduct);
router.delete('/products/:id', protect, admin, removeProduct);

router.get('/orders', protect, admin, viewOrders);
router.put('/orders/:id', protect, admin, processOrder);

router.get('/inventory', protect, admin, trackInventory);

router.post('/feedback', protect, admin, manageFeedback);

router.post('/notifications', protect, admin, sendPushNotification);

router.get('/analytics', protect, admin, getAnalyticsDashboard);

router.post('/discounts', protect, admin, createDiscountCode);
router.get('/discounts', protect, admin, getDiscountCodes);
router.delete('/discounts/:id', protect, admin, deleteDiscountCode);

export default router;