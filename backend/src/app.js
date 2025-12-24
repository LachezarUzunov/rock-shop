import express from 'express';
import cors from 'cors';
import productRoutes from './modules/products/product.routes.js';
import orderRoutes from './modules/orders/order.routes.js';
import userRoutes from "./modules/users/user.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";

export const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.get('/health', (_, res) => res.json({status: 'ok'}));