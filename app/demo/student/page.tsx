"use client";

import { motion } from "framer-motion";
import { QrCode, BarChart2, Gift, CreditCard, Trophy, ArrowRight, Zap, Target, Star, Leaf, MessageCircle, Utensils, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StudentDashboard() {
    const [scanned, setScanned] = useState(false);

    const cards = [
        { name: "Waste Stats", icon: BarChart2, path: "/demo/student/stats", color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Feedback", icon: MessageCircle, path: "/demo/student/feedback", color: "text-orange-500", bg: "bg-orange-50" },
    ];

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            {/* Demo Welcome Header */}
            <section className="flex items-center justify-between pb-6">
                <div className="space-y-1">
                    <h2 className="text-4xl font-black font-heading text-slate-900 tracking-tight italic uppercase">Eco Hub 👋</h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest italic tracking-[0.2em]">Student Intelligence Dashboard</p>
                </div>
            </section>



            {/* Next Meal Preference Card - NEw Feature */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#111827] rounded-[3.5rem] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-transform"
            >
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40 group-hover:bg-primary/20 transition-all duration-1000" />
                <div className="relative z-10 space-y-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary-light">
                                <Utensils size={28} />
                            </div>
                            <div>
                                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Next Selection</h3>
                                <p className="text-2xl font-black text-white italic tracking-tight uppercase leading-none mt-1">Wednesday Lunch</p>
                            </div>
                        </div>
                        <Link href="/demo/student/menu" className="w-12 h-12 bg-primary text-slate-900 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl shadow-primary/20">
                            <ArrowRight size={24} />
                        </Link>
                    </div>

                    <div className="flex items-end justify-between border-t border-white/5 pt-10">
                        <div className="space-y-4">
                            <span className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">Paneer Masala</span>
                            <div className="flex items-center gap-3">
                                <span className="bg-primary/10 text-primary-light px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20">Full Portion</span>
                                <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">Protein Day 🍗</span>
                            </div>
                        </div>
                        <div className="text-right">
                             <span className="text-3xl font-black text-primary italic leading-none">12:30</span>
                             <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em] mt-2">Serving Time</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Real-time Insights Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex items-center justify-between group hover:border-primary transition-all overflow-hidden relative"
                >
                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary-dark group-hover:rotate-12 transition-transform">
                             <Clock size={32} />
                        </div>
                        <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Rush Indicator</h4>
                             <div className="flex items-center gap-2 mt-2">
                                 <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                 <span className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">High Rush</span>
                             </div>
                        </div>
                    </div>
                    <div className="text-right relative z-10">
                         <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest opacity-60">Wait Time</p>
                         <p className="text-xl font-black text-red-500 italic uppercase mt-1">12 Mins</p>
                    </div>
                </motion.div>

                {/* Optional Second Insight - Contribution Stats shortcut */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-primary p-8 rounded-[3rem] border border-primary/20 shadow-xl shadow-primary/10 flex items-center justify-between group hover:scale-[1.02] transition-all overflow-hidden"
                >
                    <div className="flex items-center gap-6 relative z-10 text-slate-900">
                        <div className="w-16 h-16 bg-white/20 rounded-[1.5rem] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                             <BarChart2 size={32} />
                        </div>
                        <div>
                             <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Prep Accuracy</h4>
                             <p className="text-2xl font-black italic tracking-tighter uppercase leading-none mt-1">98% Sync</p>
                        </div>
                    </div>
                    <Link href="/demo/student/stats" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg">
                         <ChevronRight size={24} />
                    </Link>
                </motion.div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {cards.map((card, idx) => (
                    <motion.div
                        key={card.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Link
                            href={card.path}
                            className="bg-white border border-slate-100 flex flex-col items-center text-center gap-4 p-8 rounded-[2.5rem] h-full group hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            <div className={`p-5 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm shadow-slate-100`}>
                                <card.icon size={32} strokeWidth={2.5} />
                            </div>
                            <span className="font-black text-slate-900 text-[10px] uppercase tracking-[0.2em]">{card.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Impact Stats Simulation */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black font-heading text-slate-900 italic tracking-tight uppercase">Contribution Stats</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-6 opacity-60" />
                    <Link href="/demo/student/stats" className="text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                        Deep Analytics <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-slate-50 p-8 rounded-[3rem] flex items-center justify-between group hover:border-[#8FEC78] transition-all shadow-sm">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-blue-500 shadow-inner group-hover:rotate-12 transition-transform">
                                <Target size={32} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Prep Efficiency</h4>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="h-2 w-28 bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "85%" }}
                                            className="h-full bg-blue-500 rounded-full"
                                        />
                                    </div>
                                    <span className="text-[9px] font-black text-blue-500 italic">85%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-black text-slate-900 italic tracking-tighter">120</span>
                            <span className="text-[9px] text-slate-400 block font-black uppercase tracking-tighter mt-1">Meals Saved</span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
