import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { auth } from '@/store/auth.js';
import { Button } from "@/components/ui/button.jsx";
import { toast } from 'sonner';

export default function AppLayout() {
    const navigate = useNavigate();

    return (
        <div className='min-h-screen bg-zinc-950 text-zinc-100 flex flex-col'>

            {/* NAVBAR */}
            <header className='border-b border-zinc-800 bg-black/60 backdrop-blur'>
                <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>

                    <NavLink to='/' className='text-2xl font-extrabold tracking-wide text-red-500'>
                        ROCK<span className='text-white'>SHOP</span>
                    </NavLink>

                    <nav className='flex gap-6 text-lg'>
                        <NavLink to='/products' className={({ isActive }) => {
                            `hover:text-red-400 transition ${isActive ? 'text-red-500 font-bold' : 'text-zinc-300'}`
                        }}>
                            Products
                        </NavLink>

                        <NavLink to='/orders' className={({ isActive }) => {
                            `hover:text-red-400 transition ${ isActive ? 'text-red-500 font-bold' : 'text-zinc-300'}`
                        }}>
                            Orders
                        </NavLink>
                    </nav>

                    { auth.isAuthenticated() ? (
                        <div className='flex items-center gap-4'>
                            <span className='text-zinc-400'>{auth.user.value.email}</span>
                            <Button
                                variant='outline'
                                className='border-red-500 text-red-400'
                                onClick={() => {
                                    auth.logout();
                                    toast.info('Logged out');
                                    navigate('/login')
                                }}
                            >
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Button
                            variant="outline"
                            className="border-red-500 text-red-400"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                    )}
                    {/*<Button variant='outline' className='border-red-500 text-red-400 hover:bg-red-600 hover:text-white'>*/}
                    {/*    Login*/}
                    {/*</Button>*/}
                </div>
            </header>

        {/* MAIN CONTENT */}
            <main className='flex-1 max-w-6xl mx-auto px-6 py-8'>
                <Outlet />
            </main>

        {/* FOOTER */}
            <footer className='text-center py-6 text-sm text-zinc-500 border-t border-zinc-800'>
                Built with Love and Metal Head Banging!
            </footer>
        </div>
    )
}