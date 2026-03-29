"use client";

import { motion } from "framer-motion";
import { QrCode, BarChart2, Gift, CreditCard, Trophy, ArrowRight, Zap, Target, Star, Leaf, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StudentDashboard() {
    const [scanned, setScanned] = useState(false);

    const cards = [
        { name: "Waste Stats", icon: BarChart2, path: "/demo/student/stats", color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Reward Store", icon: Gift, path: "/demo/student/rewards", color: "text-purple-500", bg: "bg-purple-50" },
        { name: "Feedback", icon: MessageCircle, path: "/demo/student/feedback", color: "text-orange-500", bg: "bg-orange-50" },
        { name: "Leaderboard", icon: Trophy, path: "/demo/student/achievements", color: "text-amber-500", bg: "bg-amber-50" },
    ];

    return (
        <div className="space-y-8 max-w-2xl mx-auto">
            {/* Demo Welcome Header */}
            <section className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-3xl font-black font-heading text-slate-900 tracking-tight italic uppercase">Eco Hub 👋</h2>
                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest italic">Welcome, Demo Student</p>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-2xl border border-amber-200 shadow-sm shadow-amber-100">
                        <Star size={12} fill="currentColor" />
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">2,550 PTS</span>
                    </div>
                </div>
            </section>

            {/* Main CTA: QR Scanner Simulation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary p-12 rounded-[3.5rem] text-white flex flex-col items-center gap-8 shadow-[0_40px_80px_rgba(141,198,63,0.3)] relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                
                <div className="w-28 h-28 bg-white/20 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center border border-white/30 shadow-inner group-hover:rotate-12 transition-transform duration-500">
                    <QrCode size={56} className="text-white" />
                </div>

                <div className="text-center space-y-3">
                    <h3 className="text-3xl font-black tracking-tighter leading-tight uppercase italic">Instant Verification</h3>
                    <p className="text-white/80 text-sm font-medium uppercase tracking-widest scale-90 opacity-80">Scan QR to verify meal & earn impact points</p>
                </div>

                <button 
                  onClick={() => {
                    setScanned(true);
                    setTimeout(() => setScanned(false), 3000);
                  }}
                  className="bg-slate-900 text-white hover:bg-slate-800 font-black py-6 px-16 rounded-[2rem] text-base flex items-center gap-4 active:scale-95 transition-all w-full justify-center shadow-2xl relative overflow-hidden"
                >
                    {scanned ? (
                        <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                           <Leaf size={24} className="text-primary animate-bounce" /> 
                           <span className="italic uppercase">Verified! +50 Pts</span>
                        </motion.div>
                    ) : (
                        <>
                           <QrCode size={22} className="text-primary" /> 
                           <span className="italic uppercase tracking-widest">Simulate QR Scan</span>
                        </>
                    )}
                </button>
            </motion.div>

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

                    <div className="bg-white border border-slate-50 p-8 rounded-[3rem] flex items-center justify-between group hover:border-amber-400 transition-all shadow-sm">
                        <div className="flex items-center gap-5">
                            <div className="w-16 h-16 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-500 shadow-inner group-hover:scale-110 transition-transform">
                                <Zap size={32} />
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Community Rank</h4>
                                <p className="text-[9px] font-black text-primary-dark mt-2 bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-widest">Global Top 5%</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-black text-amber-500 italic tracking-tighter">#42</span>
                            <span className="text-[9px] text-slate-400 block font-black uppercase tracking-tighter mt-1">Leaderboard</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
