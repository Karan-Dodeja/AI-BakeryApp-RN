import express from 'express';
import { registerUser, loginUser, updatePreferences } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { addToWishlist, getWishlist } from "../controllers/userController.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/preferences', protect, updatePreferences);
router.post("/wishlist/:productId", protect, addToWishlist);
router.get("/wishlist", protect, getWishlist);
export default router;
