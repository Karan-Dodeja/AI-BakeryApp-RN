const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String },
  facebookId: { type: String },
  name: { type: String },
  dietaryPreferences: {
    glutenFree: { type: Boolean, default: false },
    vegan: { type: Boolean, default: false },
    allergens: [String]
  },
  orderHistory: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
    date: { type: Date, default: Date.now }
  }]
});

module.exports = mongoose.model('User', userSchema);
