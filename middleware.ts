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

    // 1. If not logged in and route is protected -> login
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // 2. Strict Role Protection
    if (session) {
        const userRole = session.user?.role;
        const isStudentRoute = path.startsWith('/dashboard') ||
            ['/feedback', '/waste-report', '/rewards', '/credits', '/achievements'].some(r => path.startsWith(r));
        const isAdminRoute = path.startsWith('/admin');

        // Admin trying to access student routes
        if (userRole === 'admin' && isStudentRoute) {
            return NextResponse.redirect(new URL('/admin', req.nextUrl));
        }

        // Student trying to access admin routes
        if (userRole === 'student' && isAdminRoute) {
            return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
        }
    }

    if (
        isPublicRoute &&
        session &&
        !req.nextUrl.pathname.startsWith('/dashboard') &&
        !req.nextUrl.pathname.startsWith('/admin') &&
        req.nextUrl.pathname !== '/'
    ) {
        const redirectPath = session?.user?.role === 'admin' ? '/admin' : '/dashboard';
        return NextResponse.redirect(new URL(redirectPath, req.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
