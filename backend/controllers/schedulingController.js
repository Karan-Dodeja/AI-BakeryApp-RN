import SchedulingService from '../services/schedulingService.js';

// Add other necessary imports if any
// const OtherService = require('../services/otherService');

// Example of existing code
exports.getScheduledOrders = async (req, res) => {
    const userId = req.user.id;

    try {
        const scheduledOrders = await SchedulingService.getScheduledOrders(userId);
        res.json(scheduledOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.scheduleOrder = async (req, res) => {
    const { orderId, scheduleTime } = req.body;
    const userId = req.user.id;

    try {
        const scheduledOrder = await SchedulingService.scheduleOrder(userId, orderId, scheduleTime);
        res.json(scheduledOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add the new method here
exports.cancelScheduledOrder = async (req, res) => {
    const { orderId } = req.body;
    const userId = req.user.id;

    try {
        const result = await SchedulingService.cancelScheduledOrder(userId, orderId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Example of existing code
exports.updateScheduledOrder = async (req, res) => {
    const { orderId, newScheduleTime } = req.body;
    const userId = req.user.id;

    try {
        const updatedOrder = await SchedulingService.updateScheduledOrder(userId, orderId, newScheduleTime);
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add other necessary exports if any
// exports.otherMethod = async (req, res) => {
//     // method implementation
// };
