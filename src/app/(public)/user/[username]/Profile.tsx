"use client";

import { useParams } from 'next/navigation';

function Profile() {
    const params = useParams<{ username: string }>();

    return (
        <div>
            <h1 className='font-semibold'>
                Profile <span className='text-yellow-500'>@{params.username}</span>
            </h1>
        </div>
    )
}

export default Profile;