"use client";

import { motion } from "framer-motion";
import { Edit2, ShieldCheck, Zap, Info, Calendar, Utensils, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const planData = [
    { day: "Mon", meals: 3, items: "Rice, Dal, Paneer" },
    { day: "Tue", meals: 2, items: "Roti, Sabzi" },
    { day: "Wed", meals: 3, items: "Poha, Rice, Salad" },
    { day: "Thu", meals: 1, items: "Lunch only" },
    { day: "Fri", meals: 0, items: "Not selected yet" },
    { day: "Sat", meals: 0, items: "Not selected yet" },
    { day: "Sun", meals: 0, items: "Not selected yet" }
];

export default function StudentPlanPage() {
    return (
        <div className="space-y-8 max-w-xl mx-auto pb-24">
            <header className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Your Weekly Plan</h1>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Status: 3/7 Days Completed</span>
                </div>
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 scale-110">
                   <div className="text-2xl font-black text-slate-900 italic">42%</div>
                </div>
            </header>

            {/* Quick Summary HUD */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-xl shadow-slate-900/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Utensils className="text-primary" size={18} />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Selected Meals</span>
                    </div>
                    <span className="text-3xl font-black text-white italic">09 Meals</span>
                </div>
                <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="text-amber-500" size={18} />
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Eco Points</span>
                    </div>
                    <span className="text-3xl font-black text-slate-900 italic">+250 pts</span>
                </div>
            </div>

            {/* Daily Summary Cards */}
            <div className="space-y-4">
                {planData.map((item, idx) => (
                    <motion.div
                        key={item.day}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`bg-white rounded-[2rem] p-6 border border-slate-100 flex items-center justify-between group hover:shadow-xl hover:shadow-slate-100 transition-all ${
                            item.meals > 0 ? "border-primary opacity-100" : "opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        }`}
                    >
                        <div className="flex items-center gap-6">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-black uppercase tracking-widest ${
                                item.meals > 0 ? "bg-primary text-slate-900 shadow-lg shadow-primary/20" : "bg-slate-50 text-slate-400"
                            }`}>
                                {item.day}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest italic">{item.meals > 0 ? `${item.meals} Meals Selected` : "No Selection"}</h4>
                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-tight">{item.items}</span>
                            </div>
                        </div>
                        <button className={`p-4 rounded-xl transition-all ${
                            item.meals > 0 ? "bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white" : "bg-primary text-slate-900"
                        }`}>
                           <Edit2 size={16} />
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Disclaimer / Info */}
            <div className="bg-slate-900/5 border border-slate-900/10 p-8 rounded-[2.5rem] flex items-start gap-6">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                    <Info size={18} className="text-slate-900" />
                </div>
                <div className="flex flex-col gap-2 pt-0.5">
                    <h5 className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none italic">Flex Planning Policy</h5>
                    <p className="text-[10px] font-black text-slate-400 leading-relaxed uppercase tracking-widest">
                        You can update preferences <br />Anytime before any meal cutoff.
                    </p>
                </div>
            </div>
        </div>
    );
}
