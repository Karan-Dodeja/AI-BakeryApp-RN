import express from "express";
import { addToWishlist, getWishlist } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/wishlist/:productId", protect, addToWishlist);
router.get("/wishlist", protect, getWishlist);

export default router;
