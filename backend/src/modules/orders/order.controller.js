import { db } from '../../db/knex.js';
import * as orderRepo from './order.repository.js';
import * as userRepo from '../users/user.repository.js';
import * as productRepo from '../products/product.repository.js';

export async function createOrder(req, res) {
    const { userId, productId } = req.body;

    if (! userId || ! productId) {
        return res.json(400).json({
            message: 'userId and productId are required'
        });
    }

    const user = await db('users').where({ id: userId }).first();

    if (! user) return res.status(404).json({ message: 'User not found'});

    const order = await orderRepo.createOrder({ userId, productId });
    res.status(201).json(order);
}

export function listOrders(req, res) {
    const { userId } = req.query;
    if (! userId) return res.status(400).json({ message: 'userId query param is required'});
    res.json(orders);
}

