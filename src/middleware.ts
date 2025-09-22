import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    if (!token && request.nextUrl.pathname.startsWith('/notifications')) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/explore/:path*',
        '/notifications/:path*',
        '/profile/:path*',
        '/user/:username*'
    ]
}; 