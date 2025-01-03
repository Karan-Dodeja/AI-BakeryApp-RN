const OrderHistoryService = require('../services/orderHistoryService');

// ...existing code...

exports.viewOrderHistory = async (req, res) => {
    const userId = req.user.id;

    try {
        const orderHistory = await OrderHistoryService.getOrderHistory(userId);
        res.json(orderHistory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.reorder = async (req, res) => {
    const { orderId } = req.params;
    const userId = req.user.id;

    try {
        const newOrder = await OrderHistoryService.reorder(userId, orderId);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.trackOrder = async (req, res) => {
    const { orderId } = req.params;

    try {
        const orderStatus = await OrderHistoryService.trackOrder(orderId);
        res.json(orderStatus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.viewOrderDetails = async (req, res) => {
    const { orderId } = req.params;

    try {
        const orderDetails = await OrderHistoryService.getOrderDetails(orderId);
        res.json(orderDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// ...existing code...
