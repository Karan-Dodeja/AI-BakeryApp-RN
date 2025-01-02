import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  preferences: {
    glutenFree: { type: Boolean, default: false },
    vegan: { type: Boolean, default: false },
    allergens: { type: [String], default: [] },
  },
  role: { type: String, default: 'user' }, // Add role field
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(15);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Set role before saving
userSchema.pre('save', function (next) {
  if (this.name === 'admin' && this.email === 'admin@admin.com') {
    this.role = 'admin';
  } else {
    this.role = 'user';
  }
  next();
});

// Compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);