import express from 'express';
import { getProducts, addProduct, getRecommendations } from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
import multer from 'multer';

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get('/', getProducts);
router.post('/', upload.array('images', 5), addProduct);
router.get('/recommendations', protect, getRecommendations);

export default router;
