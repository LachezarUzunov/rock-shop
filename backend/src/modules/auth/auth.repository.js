import { db } from '../../db/knex.js';

export function findUserByEmail(email) {
    return db('users')
        .where({ email })
        .first();
}

export function createUser({ firstName, lastName, email, passwordHash }) {
    return db('users')
        .insert({
            first_name: firstName,
            last_name: lastName,
            email,
            password: passwordHash
        })
}