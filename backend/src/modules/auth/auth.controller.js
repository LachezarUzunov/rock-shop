import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { env } from '../../config/env.js';
import * as authRepo from './auth.repository.js';

export async function register(req, res, next) {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (! email || ! password || ! firstName || ! lastName)
            return res.status(400).json({ message: 'First & Last name, email and password are required' });

        const existing = await authRepo.findUserByEmail(email);
        if (existing)
            return res.status(400).json({ message: 'Email already registered' });

        const passwordHash = await bcrypt.hash(password, 10);
        await authRepo.createUser({ firstName, lastName, email, passwordHash });

        res.status(201).json({ message: 'Registered successfully' });
    } catch (err) {
        next(err);
    }
}

export async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        if (! email || ! password)
            return res.status(400).json({ message: 'Email and password required '});

        const user = await authRepo.findUserByEmail(email);
        if (! user)
            return res.status(401).json({ message: 'Invalid credentials '});

        const valid = await bcrypt.compare(password, user.password);
        if (! valid)
            return res.status(401).json({ message: 'Invalid credentials '});

        const token = jwt.sign(
            { id: user.id, email: user.email },
            env.jwtSecret,
            { expiresIn: env.jwtExpires }
        )

        res.json({
            token,
            user: { id: user.id, email: user.email }
        })
    } catch (err) {
        next(err);
    }
}