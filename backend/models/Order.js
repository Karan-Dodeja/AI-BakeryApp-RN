import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
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
  status: {
    type: String,
    required: true,
    default: 'Pending'
  },
  deliveryDate: { type: Date }, // New field added
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
