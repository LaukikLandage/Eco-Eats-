"use client";

import { motion } from "framer-motion";
import { QrCode, BarChart2, Gift, CreditCard, Trophy, ArrowRight, Zap, Target } from "lucide-react";
import Link from "next/link";

export default function DashboardHome() {
    const cards = [
        { name: "Waste Report", icon: BarChart2, path: "/waste-report", color: "text-blue-500", bg: "bg-blue-50" },
        { name: "Reward Store", icon: Gift, path: "/rewards", color: "text-purple-500", bg: "bg-purple-50" },
        { name: "Credits", icon: CreditCard, path: "/credits", color: "text-orange-500", bg: "bg-orange-50" },
        { name: "Leaderboard", icon: Trophy, path: "/achievements", color: "text-amber-500", bg: "bg-amber-50" },
    ];

    return (
        <div className="p-6 space-y-8 pb-20 max-w-md mx-auto">
            <section className="space-y-1">
                <h2 className="text-2xl font-black font-heading text-slate-900 tracking-tight">Eco Hub 👋</h2>
                <p className="text-slate-400 font-medium text-sm italic">Making sustainable dining a reality.</p>
            </section>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary p-8 rounded-[2.5rem] text-white flex flex-col items-center gap-5 shadow-[0_20px_40px_rgba(141,198,63,0.3)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30 shadow-inner">
                    <QrCode size={40} className="text-white" />
                </div>

                <div className="text-center">
                    <h3 className="text-xl font-bold mb-1">Redeem Meal</h3>
                    <p className="text-white/80 text-xs">Scan the QR code at the mess counter</p>
                </div>

                <button className="bg-white text-primary font-black py-4 px-12 rounded-2xl text-base flex items-center gap-3 shadow-xl shadow-black/5 active:scale-95 transition-all w-full justify-center">
                    <QrCode size={20} /> Open Scanner
                </button>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
                {cards.map((card, idx) => (
                    <motion.div
                        key={card.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Link
                            href={card.path}
                            className="card flex flex-col items-start gap-4 p-5 h-full group"
                        >
                            <div className={`p-3 rounded-2xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-300`}>
                                <card.icon size={24} strokeWidth={2} />
                            </div>
                            <span className="font-bold text-slate-800 text-sm">{card.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black font-heading text-slate-900">Your Activity</h3>
                    <Link href="/waste-report" className="text-primary text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        See Details <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="space-y-3">
                    <div className="card p-4 flex items-center justify-between bg-white group hover:border-primary/30">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary">
                                <Target size={22} className="group-hover:rotate-12 transition-transform" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800">Weekly Goal</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="h-1.5 w-24 bg-slate-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "70%" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400">70%</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-black text-slate-900">12.5kg</span>
                            <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-tighter">Reduced</span>
                        </div>
                    </div>

                    <div className="card p-4 flex items-center justify-between bg-white group hover:border-primary/30">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                                <Zap size={22} className="group-hover:scale-125 transition-transform" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-800">Available Points</h4>
                                <p className="text-[10px] font-bold text-slate-400 mt-0.5">Ready to redeem</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-black text-amber-500">540</span>
                            <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-tighter">PTS</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
