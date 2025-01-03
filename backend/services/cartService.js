const Product = require('../models/Product');
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const mongoose = require('mongoose');

exports.addToCart = async (userId, productId, quantity) => {
    // Business logic to add product to cart
    if (quantity <= 0) {
        throw new Error('Quantity must be greater than zero');
    }

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }

    // Check if the user has a cart
    let cart = await Cart.findOne({ userId });
    if (!cart) {
        cart = new Cart({ userId, items: [] });
    }

    // Check if the product is already in the cart
    const cartItem = cart.items.find(item => item.productId.toString() === productId);
    if (cartItem) {
        // Update the quantity
        cartItem.quantity += quantity;
    } else {
        // Add the product to the cart
        cart.items.push({ productId, quantity });
    }

    // Save the cart
    await cart.save();
};

exports.checkout = async (userId) => {
    // Business logic to proceed to checkout
    // Check if the user has a cart
    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
        throw new Error('Cart is empty');
    }

    // Create an order
    const order = new Order({
        userId,
        items: cart.items,
        total: cart.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
    });

    // Save the order
    await order.save();

    // Clear the cart
    cart.items = [];
    await cart.save();
};

module.exports = {
    addToCart,
    checkout
};