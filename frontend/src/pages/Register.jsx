import { useState } from "react";
import { http } from "@/api/http.js";
import { toast } from "sonner";
import { Button } from "@/components/ui/button.jsx";
import {NavLink} from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await http.post('/auth/register', { firstName, lastName, email, password });
            toast.success('Registered', { description: 'You can now login.'});
        } catch (err) {
            toast.error('Failed', { description: 'Registration failed' });
        }
    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-red-500 mb-4'>Register</h1>

            <form onSubmit={submit} className='space-y-4 max-w-md'>
                <input
                    className='w-full p-2 rounded bg-zinc-900 border border-zinc-700'
                    placeholder='First Name'
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    className='w-full p-2 rounded bg-zinc-900 border border-zinc-700'
                    placeholder='Last Name'
                    onChange={(e) => setLastName(e.target.value)}
                />
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
                <p className='text-sm'>Already have an account? <NavLink to='/login'
                                                                           className='underline cursor-pointer'>Login</NavLink>
                </p>
                <Button className='bg-red-600 hover:bg-red-700'>Register</Button>
            </form>
        </div>
    )
}