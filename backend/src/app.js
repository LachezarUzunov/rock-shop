import express from 'express';
import productRoutes from './modules/products/product.routes.js';
import orderRoutes from './modules/orders/order.routes';

export const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/health', (_, res) => res.json({status: 'ok'}));