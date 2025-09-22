
import Link from 'next/link';

function NotFound() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center text-center px-4 py-8'>
            <h1 className='text-6xl font-bold mb-4'>404</h1>
            <p className='text-neutral-600 mb-6'>This page could not be found. Or maybe it was moved.</p>

            <Link
                href="/"
                className='text-blue-500 hover:underline'>
                {'<- Back to Home'}
            </Link>
        </div>
    )
}

export default NotFound;