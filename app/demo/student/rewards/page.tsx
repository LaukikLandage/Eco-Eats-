"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Gift, Zap, Info, Clock, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RewardStorePage() {
    const [points] = useState(2550);

    const rewards = [
        { id: 1, name: "Meal Voucher", points: 500, icon: Gift, color: "text-blue-500", bg: "bg-blue-50", desc: "Get one free meal at any campus mess." },
        { id: 2, name: "Reusable Bottle", points: 750, icon: Zap, color: "text-[#81DD67]", bg: "bg-[#8FEC78]/10", desc: "High-quality eco-friendly bottle." },
        { id: 3, name: "Eco Tote Bag", points: 300, icon: Gift, color: "text-purple-500", bg: "bg-purple-50", desc: "Carry your essentials sustainably." },
    ];

    const history = [
        { id: 1, name: "Meal Voucher", date: "2 days ago", points: 500 },
        { id: 2, name: "Eco-Coupons", date: "1 week ago", points: 200 },
    ];

    return (
        <div className="space-y-8 max-w-2xl mx-auto pb-20">
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/demo/student-dashboard" className="p-2.5 bg-slate-50 rounded-2xl hover:bg-primary/10 transition-colors">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black text-slate-900 tracking-tight italic uppercase">Reward Store</h1>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Exchange Impact for Value</span>
                    </div>
                </div>
                <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-2xl border border-amber-200 flex items-center gap-2">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs font-black uppercase tracking-widest leading-none">{points} PTS</span>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 p-10 rounded-[3rem] text-white flex flex-col items-center gap-4 shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:bg-primary/20 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -ml-16 -mb-16" />

                <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                    <Zap size={18} className="text-primary fill-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-light">Impact Balance</span>
                </div>
                
                <div className="flex items-center gap-3 my-2">
                    <span className="text-6xl font-black italic tracking-tighter">{points}</span>
                    <div className="h-10 w-px bg-white/20" />
                    <span className="text-xl font-black text-slate-400 uppercase tracking-widest">Eco<br />Pts</span>
                </div>
                
                <p className="text-slate-400 text-xs font-medium text-center max-w-xs uppercase tracking-widest scale-90 opacity-60">
                    Earned by reducing food waste & providing feedback
                </p>
            </motion.div>

            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Featured Perks</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-6" />
                    <Link href="#" className="text-primary text-[10px] font-black uppercase tracking-[0.2em] hover:tracking-[0.3em] transition-all">Browse All</Link>
                </div>
                <div className="space-y-4">
                    {rewards.map((reward, idx) => (
                        <motion.div
                          key={reward.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white p-5 rounded-[2.5rem] border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-slate-100 transition-all cursor-pointer"
                        >
                            <div className={`w-16 h-16 rounded-[1.5rem] ${reward.bg} ${reward.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                <reward.icon size={32} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight italic">{reward.name}</h4>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{reward.desc}</p>
                                <div className="flex items-center gap-1.5 text-primary mt-3">
                                    <Zap size={12} className="fill-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{reward.points} Points Req.</span>
                                </div>
                            </div>
                            <button
                              disabled={points < reward.points}
                              className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${points >= reward.points
                                      ? "bg-primary text-slate-900 hover:shadow-xl hover:shadow-primary/20 active:scale-95"
                                      : "bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100"
                                  }`}
                            >
                                Redeem
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Redemption History</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-6" />
                    <Clock size={16} className="text-slate-300" />
                </div>
                <div className="space-y-3">
                    {history.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-6 rounded-[2rem] bg-white border border-slate-50 shadow-sm group hover:border-slate-200 transition-all">
                            <div className="flex items-center gap-5">
                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                                    <Gift size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-sm font-black text-slate-800 uppercase italic tracking-tight leading-none">{item.name}</h5>
                                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">{item.date}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 bg-red-50 px-3 py-1.5 rounded-full">
                                <span className="text-[10px] font-black text-red-500 italic uppercase">-{item.points} PTS</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
