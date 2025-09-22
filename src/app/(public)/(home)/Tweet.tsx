import Link from 'next/link';
import { PAGES } from '@/config/pages.config';
import type { ITweet } from '@/shared/types/tweet.types';

interface TweetProps {
    tweet: ITweet;
}

function Tweet({ tweet }: TweetProps) {
    return (
        <div className=' border border-white/10 rounded-md p-4 bg-black/20 text-white shadow-md hover:cursor-pointer'>
            <Link
                href={PAGES.PROFILE(tweet.author)}
                className='font-semibold'
            >
                @{tweet.author}
            </Link>
            <p>{tweet.text}</p>
        </div>
    )
}

export default Tweet;