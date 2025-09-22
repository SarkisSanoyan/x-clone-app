import type { Metadata } from 'next';
import Explore from './Explore';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Explore',
    description: 'Explore page description',
};

function ExplorePage() {    // Server Component
    // Suspense is needed for searchParams in Explore.tsx
    return (
        <Suspense>
            <Explore />
        </Suspense>
    );
}

export default ExplorePage; 