'use client';

import { PAGES } from '@/config/pages.config';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { match } from 'path-to-regexp'; // Import the match function from path-to-regexp    
import Link from 'next/link';

function Menu() {
    const pathname = usePathname();
    const segment = useSelectedLayoutSegment(); // This hook for closer look at the current segment in the URL path
    // console.log('Menu pathname:', pathname);
    // console.log('Menu segment:', segment);

    return (
        <nav className='flex gap-6 text-gray-500'>
            <Link
                className={!!match(PAGES.HOME)(pathname) ? 'text-white' : ''}   // (pathname === PAGES.HOME) === (!!match(PAGES.HOME)(pathname))
                href={PAGES.HOME}>Home</Link>
            <Link
                className={!!match(PAGES.EXPLORE)(pathname) ? 'text-white' : ''}    // (pathname === PAGES.EXPLORE) === (!!match(PAGES.EXPLORE)(pathname))
                href={PAGES.EXPLORE}>Explore</Link>
            <Link
                className={!!match(PAGES.NOTIFICATIONS)(pathname) ? 'text-white' : ''}   // (pathname === PAGES.NOTIFICATIONS) === (!!match(PAGES.NOTIFICATIONS)(pathname))
                href={PAGES.NOTIFICATIONS}>Notifications</Link>
        </nav>
    )
}

export default Menu;