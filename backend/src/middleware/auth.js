import jwt from "jsonwebtoken";
import { env } from '../config/env.js';

export function authGuard(req, res, next) {
    const header = req.headers.authorization;

    if (! header || ! header.startsWith('Bearer '))
        return res.status(401).json({ message: 'No token provided' });

    const token = header.split(' ')[1];

    try {
        req.user = jwt.verify(token, env.jwtSecret);
        next()
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}