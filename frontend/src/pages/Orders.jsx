import { useQuery } from "@tanstack/react-query";
import { http } from '../api/http.js';

export default function Orders() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['orders'],
        queryFn: () =>
            http.get('http://localhost:3000/orders?userId=1')
                .then((res) => res.data),
    })

    if (isLoading) return <p>Loading orders...</p>
    if (error) return <p className='text-red-500'>Failed to load orders</p>;

    return (
        <div>
            <h1 className='text-4xl font-bold mb-6 text-red-500'>Your orders</h1>

            {data.length === 0 && <p>No orders yet. Go buy some rock merch!</p>}

            <div className='space-y-4'>
                {data.map((o) => (
                    <div
                        key={o.id}
                        className='border border-zinc-800 bg-zinc-900 p-4 rounded'
                    >
                        <p className='text-white text-lg'>{o.product}</p>
                        <p className='text-zinc-400'>
                            Status: <span className='text-red-400'>{o.status}</span>
                        </p>
                        <p className='text-zinc-500 text-sm'>{o.created_at}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}