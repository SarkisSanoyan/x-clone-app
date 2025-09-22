import Link from 'next/link';
import Menu from './Menu';
import { PAGES } from '@/config/pages.config';

function Header() {
    return (
        <header className='border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black/20 text-white shadow-md'>
            <Link href={PAGES.HOME} className=' flex items-center gap-4'>
                <h1 className="text-3xl font-bold">𝕏 Clone</h1>
            </Link>

            <Menu />
        </header>
    )
}

export default Header;