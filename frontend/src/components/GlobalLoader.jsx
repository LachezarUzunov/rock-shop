import { useIsFetching, useIsMutating } from "@tanstack/react-query";

export default function GlobalLoader() {
    const fetching = useIsFetching();
    const mutating = useIsMutating();

    if (! fetching && ! mutating) return null;

    return (
        <div className='fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50'>
            <div className='text-white text-2xl animate-pulse'>
                Loading rock power!!!
            </div>
        </div>
    )
}