import { postTweet } from '@/server-actions/post-tweet';

function TweetForm() {
    return (
        <form
            action={postTweet}
            className='mb-4 flex flex-col gap-2 border border-white/10'>
            <input name="content" placeholder="What's happening?" className='bg-transparent border border-white/20 rounded-md p-2 text-white' />
            <button type="submit" className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-600 cursor-pointer'>Tweet</button>
        </form>
    )
}

export default TweetForm;   