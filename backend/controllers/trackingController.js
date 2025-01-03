import TrackingService from '../services/trackingService.js';
import OrderService from '../services/orderService.js';
import UserService from '../services/userService.js';

// Middleware to check if user is authenticated
exports.isAuthenticated = (req, res, next) => {
    // ...existing code...
    next();
};

// Middleware to check if user is authorized to access the order
exports.isAuthorized = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const orderId = req.params.orderId;
        const isAuthorized = await UserService.isUserAuthorizedForOrder(userId, orderId);
        if (isAuthorized) {
            next();
        } else {
            res.status(403).json({ success: false, message: 'Unauthorized access' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.trackOrderProgress = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const progress = await TrackingService.getOrderProgress(orderId);
        res.status(200).json({ success: true, progress });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.getOrderDetails = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const orderDetails = await OrderService.getOrderDetails(orderId);
        res.status(200).json({ success: true, orderDetails });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Controller method to update order status
exports.updateOrderStatus = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const status = req.body.status;
        const updatedOrder = await OrderService.updateOrderStatus(orderId, status);
        res.status(200).json({ success: true, updatedOrder });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
