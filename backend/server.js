import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/config/db.js";
import userRoutes from "./src/routes/userRoutes.js";
import productroutes from "./src/routes/productRoutes.js";
import auth from "./src/middleware/auth.js";
import { trackOrderProgress } from "./services/trackingService.js"; // Import the tracking service

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes); // Endpoint to manage users
app.use("/api/products", productroutes); // Endpoint to manage products

// Protected routes
app.use('/api/users/profile', auth); // Endpoint to manage user profiles

// New route for tracking order progress
app.get('/api/orders/:orderId/track', async (req, res) => {
    try {
        const orderProgress = await trackOrderProgress(req.params.orderId);
        res.json(orderProgress);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// API Endpoints for testing in Postman:
// 1. GET /api/users - Get all users
// 2. POST /api/users - Create a new user
// 3. GET /api/products - Get all products
// 4. POST /api/products - Create a new product
// 5. GET /api/users/profile - Get user profile (Protected route, requires authentication)
// 6. GET /api/orders/:orderId/track - Track order progress by order ID
