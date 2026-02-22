"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Gift, Zap, Info, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RewardStorePage() {
    const [points] = useState(500);

    const rewards = [
        { id: 1, name: "Meal Voucher", points: 500, icon: Gift, color: "text-blue-500", bg: "bg-blue-50", desc: "Get one free meal at any campus mess." },
        { id: 2, name: "Reusable Bottle", points: 750, icon: Zap, color: "text-green-500", bg: "bg-green-50", desc: "High-quality eco-friendly bottle." },
        { id: 3, name: "Eco Tote Bag", points: 300, icon: Gift, color: "text-purple-500", bg: "bg-purple-50", desc: "Carry your essentials sustainably." },
    ];

    const history = [
        { id: 1, name: "Meal Voucher", date: "2 days ago", points: 500 },
    ];

    return (
        <div className="min-h-screen bg-bg-light p-6 space-y-8 max-w-md mx-auto">
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2.5 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-white">
                    <ChevronLeft size={20} className="text-slate-600" />
                </Link>
                <h1 className="text-xl font-black font-heading text-slate-900 tracking-tight">Reward Store</h1>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary p-8 rounded-[2.5rem] text-white flex flex-col items-center gap-1 shadow-[0_20px_40px_rgba(141,198,63,0.3)] relative overflow-hidden"
            >
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>

                <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Total Impact Points</span>
                <div className="flex items-center gap-2 my-1">
                    <Zap size={24} className="fill-white text-white" />
                    <span className="text-4xl font-black">{points}</span>
                    <span className="text-lg opacity-80 font-bold tracking-tighter">PTS</span>
                </div>
                <div className="mt-4 px-4 py-1.5 bg-white/20 rounded-full text-[9px] font-black uppercase tracking-widest backdrop-blur-md border border-white/20">
                    Earned through sustainable dining
                </div>
            </motion.div>

            <section className="space-y-4">
                <div className="flex items-center justify-between px-1">
                    <h3 className="text-lg font-black font-heading text-slate-900">Featured Rewards</h3>
                    <Link href="#" className="text-primary text-[10px] font-bold uppercase tracking-widest">See All</Link>
                </div>
                <div className="space-y-4">
                    {rewards.map((reward, idx) => (
                        <motion.div
                            key={reward.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="card !p-4 flex gap-4 items-center group cursor-pointer"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${reward.bg} ${reward.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                <reward.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-slate-800 text-sm">{reward.name}</h4>
                                <p className="text-[10px] text-slate-400 font-medium line-clamp-1">{reward.desc}</p>
                                <div className="flex items-center gap-1 text-primary mt-1.5">
                                    <Zap size={10} className="fill-primary" />
                                    <span className="text-[10px] font-black uppercase">{reward.points} Points</span>
                                </div>
                            </div>
                            <button
                                disabled={points < reward.points}
                                className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-sm ${points >= reward.points
                                        ? "bg-primary text-white hover:shadow-md active:scale-95"
                                        : "bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100"
                                    }`}
                            >
                                Redeem
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between px-1">
                    <h3 className="text-lg font-black font-heading text-slate-900 tracking-tight">Recent Activity</h3>
                    <Clock size={16} className="text-slate-300" />
                </div>
                <div className="space-y-3">
                    {history.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-50 shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                                    <Gift size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-700">{item.name}</h5>
                                    <span className="text-[10px] text-slate-400 font-medium">{item.date}</span>
                                </div>
                            </div>
                            <span className="text-xs font-black text-red-500">-{item.points} PTS</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
