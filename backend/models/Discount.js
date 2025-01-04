import mongoose from 'mongoose';

const discountCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discountPercentage: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
}, { timestamps: true });

const DiscountCode = mongoose.model('DiscountCode', discountCodeSchema);

export default DiscountCode;
