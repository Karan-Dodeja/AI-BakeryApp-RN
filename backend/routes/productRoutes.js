import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getAllProducts,
  searchProducts,
  getProductsByTags,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getProducts);
router.get("/category/:category", protect, admin, getProductsByCategory);
router.get("/products", protect, admin, getAllProducts);
router.get("/products/search", protect, admin, searchProducts);
router.get("/tags/:tags", protect, admin, getProductsByTags);
router.get("/:id", protect, admin, getProductById);
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;
