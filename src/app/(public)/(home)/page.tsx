import { TWEETS } from '@/shared/data/tweets.data';
import Tweet from './Tweet';
import TweetForm from './TweetForm';

export default function Home() {
  return (
    <div className='min-h-screen w-full justify-center px-4 py-8'>
      <main className='w-full'>
        <TweetForm />

        <div className='space-y-4' />
        {TWEETS.map(tweet =>
          <Tweet
            key={tweet.id}
            tweet={tweet}
          />
        )}
      </main>
    </div>
  );
}
