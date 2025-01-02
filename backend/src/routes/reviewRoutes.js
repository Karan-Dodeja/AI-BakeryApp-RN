import express from "express";
import {
  addReview,
  getProductReviews
} from "../controllers/reviewController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:id/review", protect, addReview);
router.get("/:id/reviews", getProductReviews);

export default router;
