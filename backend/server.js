import auth from './middleware/auth.js'; // Import the auth middleware
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import miscRoutes from './routes/miscRoutes.js';
import authRoutes from './routes/authRoutes.js';
import orderRoutes from './routes/orderRoutes.js'; // Import the order routes
import { trackOrderProgress } from './services/trackingService.js'; // Import the tracking service
import profileRoutes from './routes/profileRoutes.js'; // Import the profile routes
import searchRoutes from './routes/searchRoutes.js'; // Import the search routes

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes); // Endpoint to manage users
app.use('/api/products', productRoutes); // Endpoint to manage products
app.use('/api/admin', adminRoutes); // Endpoint to manage admin routes
app.use('/api/misc', miscRoutes); // Endpoint to manage miscellaneous routes
app.use('/api/auth', authRoutes); // Endpoint to manage auth routes
app.use('/api/orders', orderRoutes); // Endpoint to manage orders
app.use('/api/profile', profileRoutes); // Endpoint to manage user profiles
app.use('/api/search', searchRoutes); // Endpoint to search products

// Example of a protected route using the tracking service
app.get('/api/orders/track/:orderId', auth, (req, res) => {
  const { orderId } = req.params;
  const orderProgress = trackOrderProgress(orderId);
  res.json(orderProgress);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));