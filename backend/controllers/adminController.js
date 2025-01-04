import Order from "../models/Order";
import User from "../models/User";
import Product from "../models/Product";
import Promotion from "../models/Promotion";
import DiscountCode from "../models/DiscountCode";
import Feedback from "../models/Feedback";
import asyncHandler from "express-async-handler";


export const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchDashboardData = async (req, res) => {
  try {
    const ordersCount = await Order.countDocuments();
    const productsCount = await Product.countDocuments();
    const usersCount = await User.countDocuments();

    const recentOrders = await Order.find().sort({ createdAt: -1 }).limit(5);
    const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5);

    res.json({
      ordersCount,
      productsCount,
      usersCount,
      recentOrders,
      recentUsers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewPromotion = async (req, res) => {
  const { title, description, discount, startDate, endDate } = req.body;

  try {
    const promotion = new Promotion({
      title,
      description,
      discount,
      startDate,
      endDate,
    });

    const createdPromotion = await promotion.save();
    res.status(201).json(createdPromotion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getDashboard = async (req, res) => {
  try {
    // Logic to fetch analytics and sales data
    const dashboardData = await fetchDashboardData(); // Replace with actual logic
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPromotion = async (req, res) => {
  const { promotionDetails } = req.body;

  try {
    // Logic to create a new promotional offer
    const newPromotion = await createNewPromotion(promotionDetails); // Replace with actual logic
    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Logic to fetch a list of all users
    const users = await fetchAllUsers(); // Replace with actual logic
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Logic to delete a user by ID
    await User.findByIdAndDelete(userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserRole = async (req, res) => {
  const { userId, role } = req.body;

  try {
    const user = await User.findById(userId);

    if (user) {
      user.role = role;
      const updatedUser = await user.save();
      res.json({ message: 'User role updated successfully', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const { productDetails } = req.body;

  try {
    const newProduct = await createNewProduct(productDetails); // Replace with actual logic
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExistingProduct = async (req, res) => {
  const { name, price, description, category } = req.body;

  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.category = category || product.category;

      const updatedProduct = await product.save();
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { productId, productDetails } = req.body;

  try {
    const updatedProduct = await updateExistingProduct(productId, productDetails); // Replace with actual logic
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    await deleteProductById(productId); // Replace with actual logic
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'id name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export const viewOrders = async (req, res) => {
  try {
    const orders = await fetchAllOrders(); 
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.status = status || order.status;
      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const processOrder = async (req, res) => {
  const { orderId, status } = req.body;

  try {
    const updatedOrder = await updateOrderStatus(orderId, status);
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchInventoryData = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const trackInventory = async (req, res) => {
  try {
    const inventoryData = await fetchInventoryData(); 
    res.json(inventoryData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const handleUserFeedback = asyncHandler(async (req, res) => {
  const { userId, message } = req.body;

  try {
    const feedback = new Feedback({
      user: userId,
      message,
    });

    const createdFeedback = await feedback.save();
    res.status(201).json(createdFeedback);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
export const manageFeedback = async (req, res) => {
  const { feedbackDetails } = req.body;

  try {
    const feedbackResponse = await handleUserFeedback(feedbackDetails); 
    res.json(feedbackResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendNotification = asyncHandler(async (notificationDetails) => {
  // Replace with actual logic to send a notification
  // This is a placeholder implementation
  return {
    success: true,
    message: 'Notification sent successfully',
    details: notificationDetails,
  };
});
export const sendPushNotification = async (req, res) => {
  const { notificationDetails } = req.body;

  try {
    const notificationResponse = await sendNotification(notificationDetails); // Replace with actual logic
    res.json(notificationResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createDiscountCode = async (req, res) => {
  const { code, discountPercentage, expiryDate } = req.body;

  try {
    const newDiscountCode = await DiscountCode.create({ code, discountPercentage, expiryDate });
    res.status(201).json(newDiscountCode);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDiscountCodes = async (req, res) => {
  try {
    const discountCodes = await DiscountCode.find();
    res.json(discountCodes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDiscountCode = async (req, res) => {
  const { id } = req.params;

  try {
    await DiscountCode.findByIdAndDelete(id);
    res.json({ message: 'Discount code deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchAnalyticsData = async () => {
  const productPerformance = await Product.aggregate([
    { $unwind: "$sales" },
    { $group: { _id: "$name", averageRating: { $avg: "$sales.rating" } } },
  ]);

  const salesData = await Order.aggregate([
    { $unwind: "$products" },
    { $group: { _id: "$products.name", quantitySold: { $sum: "$products.quantity" } } },
  ]);

  const popularItems = await Order.aggregate([
    { $unwind: "$products" },
    { $group: { _id: "$products.name", quantitySold: { $sum: "$products.quantity" } } },
    { $sort: { quantitySold: -1 } },
    { $limit: 10 },
  ]);

  const customerDemographics = await User.aggregate([
    { $group: { _id: "$gender", count: { $sum: 1 } } },
  ]);

  const appUsage = await User.aggregate([
    { $group: { _id: "$lastLogin", count: { $sum: 1 } } },
  ]);

  return {
    productPerformance,
    salesData,
    popularItems,
    customerDemographics,
    appUsage,
  };
};


export const getAnalyticsDashboard = async (req, res) => {
  try {
    const analyticsData = await fetchAnalyticsData();
    res.json(analyticsData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
