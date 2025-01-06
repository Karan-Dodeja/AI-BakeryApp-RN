import express from 'express';
import Product from '../models/productModel.js'; // Import the product model
import { check, validationResult } from 'express-validator';
import auth from '../middleware/auth.js'; // Import the auth middleware

const router = express.Router();

// Route to search products by name
router.get('/name/:name', [
  auth, // Add authentication
  check('name', 'Name is required').not().isEmpty() // Add validation
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const products = await Product.find({ name: { $regex: req.params.name, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Route to search products by category
router.get('/category/:category', [
  auth, // Add authentication
  check('category', 'Category is required').not().isEmpty() // Add validation
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const products = await Product.find({ category: { $regex: req.params.category, $options: 'i' } });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
