import { db } from '../../db/knex.js';

export function findUserByEmail(email) {
    return db('users')
        .where({ email })
        .first();
}

export function createUser({ email, passwordHash }) {
    return db('users')
        .insert({
            email,
            password: passwordHash
        })
}