import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/auth';

const protectedRoutes = ['/dashboard', '/feedback', '/waste-report', '/rewards', '/credits', '/achievements', '/admin'];
const publicRoutes = ['/login', '/signup', '/'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = req.cookies.get('session')?.value;
    const session = cookie ? await decrypt(cookie).catch(() => null) : null;

    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    if (path.startsWith('/admin') && session?.user?.role !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    if (
        isPublicRoute &&
        session &&
        !req.nextUrl.pathname.startsWith('/dashboard') &&
        req.nextUrl.pathname !== '/'
    ) {
        return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
