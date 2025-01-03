import Order from '../models/Order.js';
import mongoose from 'mongoose';
import User from '../models/User.js';

// Middleware or other necessary imports
import authMiddleware from '../middleware/auth';
import logger from '../utils/logger';

// Additional setup or configuration
mongoose.set('strictQuery', true);

exports.viewOrderHistory = async (userId) => {
    // Business logic to view order history
    const orders = await Order.find({ userId });
    return orders;
};

exports.reorder = async (userId, orderId) => {
    // Business logic to reorder from previous orders
    const order = await Order.findById(orderId);
    if (!order || order.userId.toString() !== userId) {
        throw new Error('Order not found or access denied');
    }

    const newOrder = new Order({
        userId,
        items: order.items,
        total: order.total
    });

    await newOrder.save();
    return newOrder;
};

exports.trackOrder = async (userId, orderId) => {
    // Business logic to track current orders
    const order = await Order.findById(orderId);
    if (!order || order.userId.toString() !== userId) {
        throw new Error('Order not found or access denied');
    }

    // Simulate tracking logic
    const trackingInfo = {
        status: order.status,
        estimatedDelivery: new Date(order.createdAt.getTime() + 3 * 24 * 60 * 60 * 1000) // 3 days from order creation
    };

    return trackingInfo;
};

exports.viewOrderDetails = async (userId, orderId) => {
    // Business logic to view order details
    const order = await Order.findById(orderId);
    if (!order || order.userId.toString() !== userId) {
        throw new Error('Order not found or access denied');
    }

    return order;
};

// Additional helper functions or middleware
function formatOrder(order) {
    return {
        id: order._id,
        userId: order.userId,
        items: order.items,
        total: order.total,
        status: order.status,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt
    };
}

module.exports = {
    viewOrderHistory,
    reorder,
    trackOrder,
    viewOrderDetails
};
