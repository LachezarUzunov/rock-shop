import { db } from '../../db/knex.js';

export async function getAllProducts() {
    return db('products').select('*');
}

export async function getProductById(id) {
    return db('products')
        .where({ id })
        .first();
}