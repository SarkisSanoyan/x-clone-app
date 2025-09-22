"use client";

import { useSearchParams } from "next/navigation";  // This React Hook only works in a Client Component.

function Explore() {    // Client Component
    const searchParams = useSearchParams();
    const tag = searchParams.get('tag');

    return (
        <div>
            <h1 className="font-semibold">
                Explore by {!!tag ?
                    <span className="text-yellow-500">#{tag}</span>
                    : <span className="text-gray-500">some #tag</span>}
            </h1>
        </div>
    )
}

export default Explore;