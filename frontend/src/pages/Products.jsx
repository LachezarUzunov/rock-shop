import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { http } from '../api/http.js';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function Products() {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => http.get('http://localhost:3000/products').then(res => res.data)
    })

    const mutation = useMutation({
        mutationFn: (productId) =>
            http.post('http://localhost:3000/orders', {
                userId: 1,
                productId,
            }),
        onSuccess: () => {
            toast.success('Order created!', {
                description: 'Your rock merch is on the way!'
            });
            queryClient.invalidateQueries(['orders']);
        },
        onError: () => {
            toast.error('Failed', {
                description: 'Could not create order'
            })
        }
    })

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1 className='text-4xl font-bold mb-6 text-red-600'>
                Rock Merch Store
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {data.map((p) => (
                    <Card key={p.id}
                        className='bg-zinc-900 border-zinc-800 hover:border-red-500 transition'
                    >
                        <CardHeader>
                            <CardTitle className='text-xl text-white'>
                                {p.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-zinc-300'>
                            <p className='text-lg mb-2'>${p.price}</p>
                            <Button className='bg-red-600 hover:bg-red-700 text-white'
                                    onClick={() => mutation.mutate(p.id)}
                            >
                                Buy Now
                            </Button>
                        </CardContent>
                    </Card>
                ))}

            </div>
        </div>
    )
}
