"use client";

import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { usePathname } from "next/navigation";
import { Bell, ShieldCheck, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isStudent = pathname.includes('/demo/student');
    const isAdmin = pathname.includes('/demo/admin');

    // Dynamic Title based on Path
    const getPageTitle = (path: string) => {
        if (path.includes('feedback')) return "Meal Feedback";
        if (path.includes('stats') || path.includes('analytics')) return "Analytics Hub";
        if (path.includes('rewards')) return "Reward Store";
        if (path.includes('achievements')) return "Impact Profile";
        if (path.includes('peak-times')) return "Peak Logistics";
        if (path.includes('preparation')) return "Prep Optimization";
        if (path.includes('engagement')) return "Student Engagement";
        if (path.includes('reports')) return "University Reports";
        if (path.includes('wallet')) return "Meal Wallet";
        if (path.includes('marketplace')) return "Marketplace";
        if (path.includes('admin/credits')) return "Credit Operations";
        return isStudent ? "Eco Hub" : "University Overview";
    };

    return (
        <div className="flex h-screen bg-[#F9FBFA] font-body selection:bg-primary/30 selection:text-slate-900 overflow-hidden">
            {/* Sidebar Fix: Fixed position and width tracking */}
            <Sidebar />

            {/* Main Content Area: Proper spacing and scroll isolation */}
            <div className="flex-1 flex flex-col min-w-0 h-full relative">
                {/* Header Fix: Sticky with proper Z-index and width behavior */}
                <header className="sticky top-0 z-[60] w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 h-20 px-6 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-4">
                        <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest italic leading-none">{getPageTitle(pathname)}</h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="w-10 h-10 bg-slate-50 text-slate-400 hover:text-primary rounded-xl flex items-center justify-center transition-all hover:shadow-xl hover:shadow-slate-200/50 group">
                            <Bell size={18} className="group-hover:rotate-12 transition-transform" />
                        </button>
                        <div className="h-6 w-px bg-slate-100 mx-1" />
                        <div className="flex items-center gap-2 pr-2">
                             <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden border border-slate-800 shrink-0">
                                 <User size={16} className="text-primary-light" />
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 hidden sm:block whitespace-nowrap">
                                 {isStudent ? "Demo Student" : "Mess Admin"}
                             </span>
                        </div>
                    </div>
                </header>

                {/* Main Scroll Content: Isolated scrolling to prevent sidebar issues */}
                <main className="flex-1 overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-200 bg-[#F9FBFA]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="p-4 md:p-8 lg:p-12 pb-32 md:pb-12 max-w-7xl mx-auto w-full"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>

                {/* Persistent Global Bottom Nav - Mobile Only */}
                <BottomNav />
            </div>


        </div>
    );
}
