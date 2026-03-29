"use client";

import { motion } from "framer-motion";
import { ChevronRight, Calendar, Coffee, Sun, Moon, ArrowRight, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const menuData = {
    Breakfast: [
        { name: "Poha", icon: "🥣" },
        { name: "Sprouts", icon: "🌱" },
        { name: "Tea/Coffee", icon: "☕" }
    ],
    Lunch: [
        { name: "Paneer Masala", icon: "🥘" },
        { name: "Jeera Rice", icon: "🍚" },
        { name: "Dal Tadka", icon: "🥣" },
        { name: "Roti", icon: "🫓" }
    ],
    Dinner: [
        { name: "Veg Biryani", icon: "🍛" },
        { name: "Raita", icon: "🥤" },
        { name: "Gulab Jamun", icon: "🍬" }
    ]
};

export default function WeeklyMenuPage() {
    const [selectedDay, setSelectedDay] = useState("Monday");

    return (
        <div className="space-y-8 max-w-xl mx-auto pb-24">
            <header className="flex flex-col gap-2">
                <h1 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">This Week's Menu</h1>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] italic">Campus Dining Intelligence</p>
            </header>

            {/* Horizontal Day Selector */}
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-none -mx-4 px-4">
                {days.map((day) => (
                    <button
                        key={day}
                        onClick={() => setSelectedDay(day)}
                        className={`flex-shrink-0 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                            selectedDay === day 
                            ? "bg-primary text-slate-900 shadow-lg shadow-primary/20 scale-105" 
                            : "bg-white text-slate-400 border border-slate-100"
                        }`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Menu Cards */}
            <div className="space-y-6">
                {Object.entries(menuData).map(([mealType, items], idx) => (
                    <motion.div
                        key={mealType}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                {mealType === "Breakfast" && <Coffee className="text-amber-500" size={20} />}
                                {mealType === "Lunch" && <Sun className="text-primary-dark" size={20} />}
                                {mealType === "Dinner" && <Moon className="text-purple-500" size={20} />}
                                <h3 className="text-lg font-black text-slate-900 italic uppercase tracking-tight">{mealType}</h3>
                            </div>
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Available 7:30 - 9:30</span>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            {items.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl group-hover:bg-white transition-colors border border-transparent group-hover:border-slate-50">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-600">{item.name}</span>
                                </div>
                            ))}
                        </div>

                        <Link 
                            href={`/demo/student/preferences?day=${selectedDay}&meal=${mealType}`}
                            className="mt-8 w-full py-5 bg-slate-900 text-white rounded-[1.5rem] flex items-center justify-between px-8 text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300 active:scale-95"
                        >
                            <span>Select Preferences</span>
                            <ArrowRight size={14} />
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Smart Prompt */}
            <div className="bg-primary/10 border border-primary/20 p-6 rounded-[2rem] flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-dark shadow-sm">
                    <UtensilsCrossed size={20} />
                </div>
                <div className="flex-1">
                    <p className="text-[10px] font-black text-primary-dark uppercase tracking-widest leading-relaxed">
                        Planning your meals helps us <br />Reduce food waste by 25%! 🌍
                    </p>
                </div>
            </div>
        </div>
    );
}
