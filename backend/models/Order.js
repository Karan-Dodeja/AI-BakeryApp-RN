import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  deliveryDetails: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentInfo: {
    method: { type: String, required: true },
    status: { type: String, required: true },
  },
  status: { type: String, default: 'Pending' },
  deliveryDate: { type: Date }, // New field added
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);