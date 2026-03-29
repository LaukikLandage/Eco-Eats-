"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Trophy, Medal, Star, TrendingUp, Users, Crown, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AchievementsPage() {
    const [activeTab, setActiveTab] = useState("week");

    const leaderboard = [
        { rank: 1, name: "Laukik Landage", points: 2450, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laukik", trend: "up", status: "Sovereign" },
        { rank: 2, name: "Aditi Sharma", points: 2100, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi", trend: "down", status: "Elite" },
        { rank: 3, name: "Prathamesh P.", points: 1950, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prathamesh", trend: "up", status: "Elite" },
        { rank: 4, name: "Snehal R.", points: 1800, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Snehal", trend: "same", status: "Guardian" },
        { rank: 5, name: "Rahul Deshmukh", points: 1650, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul", trend: "up", status: "Guardian" },
    ];

    const badges = [
        { title: "Waste Warrior", icon: Medal, color: "text-amber-500", bg: "bg-amber-50", earned: true },
        { title: "Eco King", icon: Trophy, color: "text-[#81DD67]", bg: "bg-[#8FEC78]/10", earned: true },
        { title: "First Rescue", icon: Star, color: "text-blue-500", bg: "bg-blue-50", earned: true },
        { title: "Plate Cleaner", icon: Medal, color: "text-slate-300", bg: "bg-slate-50", earned: false },
    ];

    return (
        <div className="space-y-8 max-w-2xl mx-auto pb-20">
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/demo/student" className="p-2.5 bg-slate-50 rounded-2xl hover:bg-primary/10 transition-colors">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black text-slate-900 tracking-tight italic uppercase">Impact Profile</h1>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Campus Standing</span>
                    </div>
                </div>
                <div className="bg-slate-900 text-primary px-4 py-2 rounded-2xl border border-slate-800 flex items-center gap-2">
                    <Crown size={14} fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Rank #1</span>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
                
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-primary/30 p-1 border-4 border-white">
                            <img src={leaderboard[0].avatar} className="w-full h-full rounded-[2.2rem]" alt="Profile" />
                        </div>
                        <div className="absolute -bottom-3 -right-3 bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center border-4 border-white shadow-xl">
                            <Crown size={20} className="text-primary fill-primary" />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-primary-dark">Eco Sovereign</span>
                            <div className="w-1 h-1 bg-slate-300 rounded-full" />
                            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">Level 42</span>
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase leading-tight">Laukik Landage</h2>
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                                <Zap size={14} className="text-primary fill-primary" />
                                <span className="text-sm font-black text-slate-900">2,450</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase">Pts</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-100">
                                <ShieldCheck size={14} className="text-blue-500" />
                                <span className="text-sm font-black text-slate-900">120</span>
                                <span className="text-[10px] font-black text-slate-400 uppercase">Stats</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Unlocked Badges</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-6 opacity-60" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">3 / 4</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {badges.map((badge, idx) => (
                        <motion.div
                            key={badge.title}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className={`w-16 h-16 rounded-[1.5rem] ${badge.bg} ${badge.color} flex items-center justify-center border-4 group-hover:scale-110 transition-all duration-500 ${badge.earned ? "border-white shadow-xl shadow-slate-200/50" : "border-dashed border-slate-100 opacity-40grayscale"}`}>
                                <badge.icon size={28} />
                            </div>
                            <span className={`text-[10px] font-black text-center leading-tight uppercase tracking-widest ${badge.earned ? "text-slate-600" : "text-slate-300"}`}>
                                {badge.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Leaderboard</h3>
                    <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100 scale-90">
                        {["week", "month", "all"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? "bg-slate-900 text-white shadow-lg" : "text-slate-400"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[3rem] border border-slate-50 overflow-hidden shadow-sm">
                    {leaderboard.map((user, idx) => (
                        <div
                            key={user.rank}
                            className={`flex items-center justify-between p-6 ${idx !== leaderboard.length - 1 ? "border-b border-slate-50" : ""} ${idx === 0 ? "bg-primary/5" : "hover:bg-slate-50/50"} transition-colors`}
                        >
                            <div className="flex items-center gap-5">
                                <span className={`w-6 text-sm font-black italic ${idx < 3 ? "text-primary-dark" : "text-slate-300"}`}>
                                    #{user.rank}
                                </span>
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden border-2 border-white shadow-sm transition-transform group-hover:scale-110">
                                        <img src={user.avatar} alt={user.name} />
                                    </div>
                                    {idx === 0 && (
                                        <div className="absolute -top-1.5 -right-1.5 bg-primary text-slate-900 w-5 h-5 rounded-lg flex items-center justify-center border-2 border-white shadow-sm">
                                            <Crown size={10} fill="currentColor" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <h5 className="text-sm font-black text-slate-900 uppercase italic tracking-tight leading-none">{user.name}</h5>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <TrendingUp size={10} className={user.trend === "up" ? "text-primary" : "text-slate-400"} />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">{user.status}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right flex flex-col items-end">
                                <span className="text-lg font-black text-slate-900 italic tracking-tighter leading-none">{user.points}</span>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1.5">Impact Pts</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
