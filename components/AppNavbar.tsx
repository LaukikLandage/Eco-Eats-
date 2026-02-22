"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Leaf, LogOut, User, Bell } from "lucide-react";

export default function AppNavbar() {
    const pathname = usePathname();
    const router = useRouter();

    const links = [
        { name: "Dashboard", href: "/dashboard" },
        { name: "Waste Report", href: "/waste-report" },
        { name: "Feedback", href: "/feedback" },
        { name: "Rewards", href: "/rewards" },
        { name: "Credits", href: "/credits" },
        { name: "Achievements", href: "/achievements" },
    ];

    const handleLogout = async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.refresh(); // Trigger server-side re-check of session
        router.push("/login");
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 h-20">
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo & Links */}
                <div className="flex items-center gap-12">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <div className="w-9 h-9 bg-[#22C55E] rounded-lg flex items-center justify-center">
                            <Leaf size={20} className="text-white fill-white/20" />
                        </div>
                        <span className="text-xl font-black text-slate-800">EcoEats</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-bold transition-colors ${pathname === link.href ? "text-[#22C55E]" : "text-slate-400 hover:text-[#22C55E]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex items-center justify-center w-10 h-10 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                        <Bell size={20} />
                    </button>

                    <div className="h-8 w-px bg-slate-100 mx-2 hidden sm:block" />

                    <Link
                        href="/profile"
                        className={`flex items-center gap-2 p-1.5 pr-4 rounded-xl transition-all ${pathname === '/profile' ? 'bg-green-50 text-[#22C55E]' : 'hover:bg-slate-50 text-slate-600'
                            }`}
                    >
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                        </div>
                        <span className="text-xs font-bold hidden sm:block">My Profile</span>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    >
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
