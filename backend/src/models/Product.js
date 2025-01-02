import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: false },
  category: { type: String, required: true },
  glutenFree: { type: Boolean, default: false },
  inventory: { type: Number, default: 0 },
  vegan: { type: Boolean, default: false },
  seasonal: { type: Boolean, default: false },
});

export default mongoose.model('Product', productSchema);
