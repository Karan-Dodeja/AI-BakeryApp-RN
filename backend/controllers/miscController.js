import User from '../models/User.js';

export const getRecommendations = async (req, res) => {
  try {
    // Logic to fetch personalized product recommendations
    const recommendations = await fetchRecommendations(req.user.id); // Replace with actual logic
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addReview = async (req, res) => {
  const { productId } = req.params;
  const { review } = req.body;

  try {
    // Logic to add a review for a product
    const newReview = await addProductReview(productId, req.user.id, review); // Replace with actual logic
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getNotifications = async (req, res) => {
  try {
    // Logic to fetch real-time notifications for the user
    const notifications = await fetchUserNotifications(req.user.id); // Replace with actual logic
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const contactSupport = async (req, res) => {
  const { message } = req.body;

  try {
    // Logic to send a support message
    const supportResponse = await sendSupportMessage(req.user.id, message); // Replace with actual logic
    res.status(201).json(supportResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch current user profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile information
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        token: generateToken(updatedUser.id),
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};