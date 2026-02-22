import { getSession } from "@/lib/auth";
import PublicNavbar from "./PublicNavbar";
import AppNavbar from "./AppNavbar";

export default async function NavbarWrapper() {
    const session = await getSession().catch(() => null);

    // If we have a valid session and user is logged in
    if (session && session.user) {
        return <AppNavbar />;
    }

    // Default to Public Navbar
    return <PublicNavbar />;
}
