"use client"

import { PAGES } from '@/config/pages.config';
import { useRouter } from 'next/navigation';    // This React Hook only works in a Client Component.

function Notifications() {
    const router = useRouter();

    return (
        <div>
            <h1 className='font-semibold'>Notifications</h1>
            <button
                className="text-blue-500 hover:cursor-pointer"
                onClick={() => router.push(PAGES.HOME)}>
                Back to Home
            </button>
        </div>
    )
}

export default Notifications;