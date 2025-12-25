import { useState } from "react";
import { http } from "@/api/http.js";
import { auth } from "@/store/auth.js";
import { toast } from 'sonner';
import { Button } from "@/components/ui/button.jsx";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function submit(e) {
        e.preventDefault();
        try {
            const res = await http.post('/auth/login', { email, password });
            auth.login(res.data.token, res.data.user);
            toast.info('Welcome back!', { description: `Logged in as ${res.data.user.email}`});
            navigate('/products');
        } catch (err) {
            toast.error('Failed', { description: 'Invalid credentials' });
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-red-500 mb-4'>Login</h1>
            <form onSubmit={submit} className='space-y-4 max-w-md'>
                <input
                    className='w-full p-2 rounded bg-zinc-900 border border-zinc-700'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='w-full p-2 rounded bg-zinc-900 border border-zinc-700'
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className='text-sm'>Don't have an account yet? <NavLink to='/register' className='underline cursor-pointer'>Register</NavLink></p>
                <Button className='bg-red-600 hover:bg-red-700'>Login</Button>
            </form>

        </div>
    )
}