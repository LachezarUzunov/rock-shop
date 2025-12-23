import { db } from '../../db/knex.js';

export async function getAllUsers() {
    return db('users').select('*');
}