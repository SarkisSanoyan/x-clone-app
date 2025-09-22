export const PAGES = {
    HOME: "/",
    EXPLORE: "/explore",
    NOTIFICATIONS: "/notifications",
    PROFILE: (username: string) => `/user/${username}`,
};