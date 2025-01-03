import mongoose from 'mongoose';

const tokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  token: { type: String, required: true },
  type: { type: String, required: true }, // New field added
  createdAt: { type: Date, default: Date.now, expires: 3600 },
});

export default mongoose.model('Token', tokenSchema);