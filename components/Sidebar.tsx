"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Home,
    BarChart2,
    Gift,
    CreditCard,
    Trophy,
    ShieldCheck,
    LogOut,
    Leaf,
    Users
} from "lucide-react";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const res = await fetch("/api/auth/session");
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                }
            } catch (err) {
                console.error("Failed to fetch session", err);
            }
        };
        fetchSession();
    }, []);

    const navItems = [
        { name: "Home", icon: Home, path: "/dashboard" },
        { name: "Waste Report", icon: BarChart2, path: "/waste-report" },
        { name: "Reward Store", icon: Gift, path: "/rewards" },
        { name: "Credit Transfer", icon: CreditCard, path: "/credits" },
        { name: "Achievements", icon: Trophy, path: "/achievements" },
        { name: "Our Team", icon: Users, path: "/team" },
    ];

    // Only show Admin Panel to admin users
    if (user?.role === "admin") {
        navItems.push({ name: "Admin Panel", icon: ShieldCheck, path: "/admin" });
    }

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/login");
    };

    return (
        <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-100 h-screen sticky top-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
            <div className="p-10">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(141,198,63,0.3)]">
                        <Leaf size={28} className="text-white fill-white/20" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-900 tracking-tight">
                        EcoEats<span className="text-primary">.</span>
                    </span>
                </Link>
            </div>

            <nav className="flex-1 px-6 space-y-3 mt-4 overflow-y-auto">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${isActive
                                ? "bg-primary text-white shadow-[0_10px_20px_rgba(141,198,63,0.3)] scale-[1.02]"
                                : "text-slate-400 hover:bg-slate-50 hover:text-slate-700"
                                }`}
                        >
                            <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-4 w-full px-5 py-4 rounded-2xl font-bold text-sm text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                >
                    <LogOut size={22} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
