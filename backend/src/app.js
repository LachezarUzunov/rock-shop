import express from 'express';
import cors from 'cors';
import productRoutes from './modules/products/product.routes.js';
import orderRoutes from './modules/orders/order.routes.js';
import userRoutes from "./modules/users/user.routes.js";

export const app = express();
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);

app.get('/health', (_, res) => res.json({status: 'ok'}));