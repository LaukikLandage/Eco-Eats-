"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    BarChart2,
    Gift,
    MessageCircle,
    Trophy,
    ShieldCheck,
    Clock,
    Zap,
    Users,
    FileText,
    LogOut,
    Leaf,
    Play,
    Utensils,
    Calendar,
    Activity,
    ShoppingCart,
    RefreshCcw
} from "lucide-react";
import { motion } from "framer-motion";

export default function Sidebar() {
    const pathname = usePathname();
    const isStudent = pathname.includes('/demo/student');
    const isAdmin = pathname.includes('/demo/admin');

    const studentNav = [
        { name: "Dashboard", icon: Home, path: "/demo/student" },
        { name: "Meal Wallet", icon: Calendar, path: "/demo/student/wallet" },
        { name: "Marketplace", icon: ShoppingCart, path: "/demo/student/marketplace" },
        { name: "Menu Preference", icon: Utensils, path: "/demo/student/menu" },
        { name: "Feedback", icon: MessageCircle, path: "/demo/student/feedback" },
        { name: "Waste Stats", icon: BarChart2, path: "/demo/student/stats" },
    ];

    const adminNav = [
        { name: "Overview", icon: ShieldCheck, path: "/demo/admin" },
        { name: "Credit Operations", icon: RefreshCcw, path: "/demo/admin/credits" },
        { name: "Meal Insights", icon: Activity, path: "/demo/admin/insights" },
        { name: "Waste Analytics", icon: BarChart2, path: "/demo/admin/analytics" },
        { name: "Peak Times", icon: Clock, path: "/demo/admin/peak-times" },
        { name: "Preparation", icon: Zap, path: "/demo/admin/prepare" },
        { name: "Engagement", icon: Users, path: "/demo/admin/engagement" },
        { name: "Reports", icon: FileText, path: "/demo/admin/reports" },
    ];

    const navItems = isStudent ? studentNav : adminNav;

    // Don't show sidebar on landing/about etc.
    if (!isStudent && !isAdmin) return null;

    return (
        <aside className="hidden md:flex flex-col w-72 bg-white border-r border-slate-100 h-screen flex-shrink-0 overflow-hidden relative z-[70]">
            {/* Logo */}
            <div className="p-8">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                        <Leaf size={22} className="text-slate-900" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-900 tracking-tighter italic">EcoEats</span>
                </Link>

                {/* Role Badge - Matches Inverted Design Specs */}
                <div className={`mt-8 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full shadow-lg transition-all ${
                    isStudent 
                    ? "bg-primary text-slate-900 shadow-primary/20" 
                    : "bg-white border border-slate-100 text-slate-900 shadow-slate-200/50"
                }`}>
                    <Play size={10} fill="currentColor" className={isStudent ? "text-slate-900" : "text-primary"} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                        {isStudent ? "Student Demo" : "University Admin"}
                    </span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto scrollbar-none">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3.5 px-6 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all duration-300 relative group ${isActive
                                ? "text-slate-900"
                                : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTabSidebar"
                                    className="absolute inset-0 bg-primary rounded-[1.5rem] -z-10 shadow-lg shadow-primary/20"
                                />
                            )}
                            <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-slate-900" : "group-hover:text-primary transition-colors"} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Exit */}
            <div className="p-6 border-t border-slate-50">
                <Link
                    href="/"
                    className="flex items-center gap-4 w-full px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                >
                    <LogOut size={20} />
                    <span>Exit Demo</span>
                </Link>
            </div>
        </aside>
    );
}
