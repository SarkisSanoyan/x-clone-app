import type { Metadata } from 'next';
import Profile from './Profile';

export const metadata: Metadata = {
    title: 'User Profile',
    description: 'Profile page for the user',
};

export default function UserPage() {
    return <Profile />;
}
