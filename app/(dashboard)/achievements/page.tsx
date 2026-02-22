"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Trophy, Medal, Star, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AchievementsPage() {
    const [activeTab, setActiveTab] = useState("week");

    const leaderboard = [
        { rank: 1, name: "Laukik Landage", points: 2450, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laukik", trend: "up" },
        { rank: 2, name: "Aditi Sharma", points: 2100, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditi", trend: "down" },
        { rank: 3, name: "Prathamesh P.", points: 1950, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prathamesh", trend: "up" },
        { rank: 4, name: "Snehal R.", points: 1800, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Snehal", trend: "same" },
        { rank: 5, name: "Rahul Deshmukh", points: 1650, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul", trend: "up" },
    ];

    const badges = [
        { title: "Waste Warrior", icon: Medal, color: "text-amber-500", bg: "bg-amber-50", earned: true },
        { title: "Eco King", icon: Trophy, color: "text-yellow-500", bg: "bg-yellow-50", earned: true },
        { title: "First Rescue", icon: Star, color: "text-blue-500", bg: "bg-blue-50", earned: true },
        { title: "Plate Cleaner", icon: Medal, color: "text-slate-300", bg: "bg-slate-50", earned: false },
    ];

    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                    <ChevronLeft size={20} className="text-slate-600" />
                </Link>
                <h1 className="text-xl font-bold font-heading text-slate-800">Achievements</h1>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card bg-white p-8 overflow-hidden relative border-none"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-24 h-24 bg-gradient-to-t from-yellow-400 to-yellow-200 rounded-full flex items-center justify-center shadow-xl shadow-yellow-400/20 p-4 border-8 border-white">
                        <Trophy size={48} className="text-white fill-white/20" />
                    </div>
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-yellow-600">Weekly Champion</span>
                        <h2 className="text-2xl font-bold text-slate-800">Laukik Landage</h2>
                        <div className="flex items-center justify-center gap-2 text-primary font-bold">
                            <Star size={14} className="fill-primary" />
                            <span>2450 PTS</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <section className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-slate-800">My Badges</h3>
                <div className="grid grid-cols-4 gap-4">
                    {badges.map((badge, idx) => (
                        <motion.div
                            key={badge.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${badge.bg} ${badge.color} flex items-center justify-center border-2 ${badge.earned ? "border-white shadow-sm" : "border-dashed border-slate-200 opacity-50"}`}>
                                <badge.icon size={24} />
                            </div>
                            <span className={`text-[9px] font-bold text-center leading-tight ${badge.earned ? "text-slate-600" : "text-slate-300"}`}>
                                {badge.title}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-heading text-slate-800">Leaderboard</h3>
                    <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-100">
                        {["week", "month", "all"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${activeTab === tab ? "bg-primary text-white" : "text-slate-400"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="card p-0 overflow-hidden">
                    {leaderboard.map((user, idx) => (
                        <div
                            key={user.rank}
                            className={`flex items-center justify-between p-4 ${idx !== leaderboard.length - 1 ? "border-b border-slate-50" : ""} ${idx === 0 ? "bg-primary/5" : ""}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`w-6 text-sm font-bold ${idx < 3 ? "text-primary" : "text-slate-400"}`}>
                                    #{user.rank}
                                </span>
                                <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border-2 border-white shadow-sm">
                                    <img src={user.avatar} alt={user.name} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-800">{user.name}</h5>
                                    <div className="flex items-center gap-1">
                                        <TrendingUp size={10} className={user.trend === "up" ? "text-green-500" : "text-slate-400"} />
                                        <span className="text-[10px] text-slate-400">{user.trend === "up" ? "Rising" : "Steady"}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-sm font-bold text-slate-800">{user.points}</span>
                                <span className="text-[10px] text-slate-400 block uppercase">Pts</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
