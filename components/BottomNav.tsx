"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart2, Gift, CreditCard, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", icon: Home, path: "/dashboard" },
        { name: "Report", icon: BarChart2, path: "/waste-report" },
        { name: "Rewards", icon: Gift, path: "/rewards" },
        { name: "Team", icon: Users, path: "/team" },
        { name: "Credits", icon: CreditCard, path: "/credits" },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4">
            <div className="max-w-[450px] mx-auto bg-white/90 backdrop-blur-xl border border-white/50 flex items-center justify-around py-3 px-2 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`nav-item relative ${isActive ? "active" : ""}`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -top-1 w-1 h-1 bg-primary rounded-full"
                                />
                            )}
                            <item.icon size={20} className={isActive ? "text-primary" : "text-slate-400"} />
                            <span className={`text-[9px] font-bold uppercase tracking-tighter mt-1 ${isActive ? "text-primary" : "text-slate-400"}`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
