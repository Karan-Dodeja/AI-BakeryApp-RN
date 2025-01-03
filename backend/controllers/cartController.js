import CartService from "../services/cartService.js";

// ...existing code...

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id;

  try {
    const cart = await CartService.addToCart(userId, productId, quantity);
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.checkout = async (req, res) => {
  const userId = req.user.id;

  try {
    const order = await CartService.checkout(userId);
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ...existing code...
