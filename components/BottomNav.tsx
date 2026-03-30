"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart2, Gift, Utensils, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", icon: Home, path: "/demo/student" },
        { name: "Preferences", icon: Utensils, path: "/demo/student/menu" },
        { name: "Stats", icon: BarChart2, path: "/demo/student/stats" },
    ];

    // Only show on student demo pages
    if (!pathname.includes('/demo/student')) return null;

    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-[400px]">
            <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 flex items-center justify-around py-4 px-2 rounded-[2.5rem] shadow-2xl shadow-black/20">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="flex flex-col items-center gap-1 relative px-3 py-1"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeNavMobile"
                                    className="absolute inset-0 bg-primary/20 rounded-2xl -z-10 border border-primary/20"
                                />
                            )}
                            <item.icon size={20} className={isActive ? "text-primary" : "text-slate-400"} />
                            <span className={`text-[8px] font-black uppercase tracking-widest ${isActive ? "text-primary" : "text-slate-500"}`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
