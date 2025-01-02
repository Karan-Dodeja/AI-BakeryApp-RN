import express from "express";
import {
  getProducts,
  addProduct,
  getRecommendations,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import {
  addReview,
  getProductReviews,
} from "../controllers/reviewController.js";

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", getProducts);
router.post("/", upload.array("images", 10), addProduct);
console.log(addProduct);
router.get("/recommendations", protect, getRecommendations);
router.post("/:id/review", protect, addReview);
router.get("/:id/reviews", getProductReviews);

export default router;
