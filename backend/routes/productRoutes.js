import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getProductsByCategory, getAllProducts, searchProducts, getProductsByTags } from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/products', getAllProducts);
router.get('/products/search', searchProducts);
router.get('/tags/:tags', getProductsByTags);
router.get('/:id', getProductById);
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;