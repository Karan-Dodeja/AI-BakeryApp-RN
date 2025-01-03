import express from 'express';
import { registerUser, loginUser, updatePreferences, getUsersEmail } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { addToWishlist } from "../controllers/userController.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/preferences', protect, updatePreferences);
router.post("/wishlist/:productId", protect, addToWishlist);
// router.get("/wishlist", protect, getWishlist);
router.get('/checkEmail', getUsersEmail); // Remove protect middleware

export default router;