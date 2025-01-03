import User from '../models/User.js'; // Assuming you have a User model
import Product from '../models/Product.js'; // Assuming you have a Product model

exports.getRecommendations = async (userId) => {
    // Business logic to get recommendations
    const user = await User.findById(userId);
    if (!user) {
        throw new Error('User not found');
    }
    // Example logic to get recommendations based on user's past orders
    const recommendations = await Product.find({ category: user.favoriteCategory }).limit(5);
    return recommendations;
};
