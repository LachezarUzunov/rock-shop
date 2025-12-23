import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Products() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('http://localhost:3000/products').then(res => res.data)
    })

    if (isLoading) return <p>Loading...</p>

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Rock Products 🤘</h2>

            <ul className="space-y-2">
                {data.map(p => (
                    <li key={p.id} className="border rounded p-3">
                        {p.name} — ${p.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
