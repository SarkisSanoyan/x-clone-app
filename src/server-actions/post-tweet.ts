'use server';

export async function postTweet(data: FormData) {
    const tweet = data.get('content');     
}