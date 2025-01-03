import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  category: { type: String, required: true },
  dietaryNeeds: { type: [String], required: true },
  stock: { type: Number, required: true, default: 0 },
  glutenFree: Boolean,
  vegan: Boolean,
  seasonal: Boolean,
}, { timestamps: true });

export default mongoose.model('Product', productSchema);