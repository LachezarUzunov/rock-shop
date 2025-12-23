import { db } from '../../db/knex.js';

export async function createOrder({ userId, productId }) {
    const [id] = await db('orders')
        .insert({
            user_id: userId,
            product_id: productId,
            status: 'pending'
        });

    return getOrderById(id);
}

export async function getOrderById(id) {
    return db('orders as o')
        .join('products as p', 'o.product_id', 'p.id')
        .join('users as u', 'o.user_id', 'u.id')
        .select(
            'o.id',
            'o.status',
            'o.created_at',
            'u.email as user',
            'u.first_name as firstName',
            'u.last_name as lastName',
            'p.name as product',
            'p.price'
        )
        .where('o.id', id)
        .first();
}

export async function getOrdersForUser(userId) {
    return db('orders as o')
        .join('products as p', 'o.product_id', 'p.id')
        .select(
            'o.id',
            'o.status',
            'o.created_at',
            'p.name as product',
            'p.price'
        )
        .where('o.user_id', userId)
        .orderBy('o.created_at', 'desc');
}