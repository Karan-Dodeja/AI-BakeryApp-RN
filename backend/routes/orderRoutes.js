import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  updateDeliveryStatus,
  updatePaymentStatus,
  trackOrder,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id", protect, admin, updateOrderStatus);
router.put("/:id/delivery-status", protect, admin, updateDeliveryStatus);
router.put("/:id/payment-status", protect, admin, updatePaymentStatus);
router.delete("/:id", protect, deleteOrder);
router.get("/track/:orderId", protect, trackOrder);
router.get("/:orderId", protect, getOrderById);

export default router;
