import * as userRepo from './user.repository.js';

export async function listUsers(req, res) {
    const users = await userRepo.getAllUsers();
    res.json(users);
}