"use client";

import { motion } from "framer-motion";
import { Users, BarChart2, Zap, ArrowDown, TrendingUp, Info, Activity, AlertTriangle } from "lucide-react";
import SafeChart from "@/components/SafeChart";
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Cell
} from "recharts";

const portionData = [
    { name: "Small", value: 45, color: "#81DD67" },
    { name: "Medium", value: 128, color: "#8FEC78" },
    { name: "Large", value: 32, color: "#4CAF50" },
];

const dishPopularity = [
    { name: "Paneer", value: 180 },
    { name: "Biryani", value: 240 },
    { name: "Dal Tadka", value: 120 },
    { name: "Salad", value: 90 },
];

export default function AdminInsightsPage() {
    return (
        <div className="space-y-12 max-w-7xl mx-auto pb-24 px-6 pt-10">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-10">
                <div className="space-y-3">
                    <h1 className="text-5xl font-black text-slate-900 tracking-tighter italic uppercase underline decoration-primary decoration-8 underline-offset-8">Meal Insights</h1>
                    <p className="text-[12px] font-black text-slate-400 mt-4 uppercase tracking-[0.4em] italic leading-none">Estimated Demand for Today</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-[3.5rem] shadow-2xl shadow-slate-900/10 flex items-center gap-6 group hover:translate-y-[-4px] transition-transform duration-500">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                        <Users size={28} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-black text-white italic tracking-tighter">425</span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Confirmed Students</span>
                    </div>
                </div>
            </header>

            <div className="flex flex-col gap-10">
                {/* Peak Day Insight - Repositioned as requested */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary p-12 md:p-24 rounded-[4rem] shadow-xl shadow-primary/20 group hover:scale-[1.01] transition-transform flex flex-col md:flex-row items-center gap-12 border-4 border-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full -mr-48 -mt-48 blur-[100px] pointer-events-none" />
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-900/10 rounded-[2.5rem] flex items-center justify-center text-slate-900 shrink-0">
                         <TrendingUp size={64} className="md:size-[80px]" />
                    </div>
                    <div className="flex flex-col text-center md:text-left">
                         <span className="text-5xl md:text-8xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">Peak Day</span>
                         <span className="text-xl md:text-3xl font-black text-slate-900 italic uppercase tracking-[0.2em] mt-4 opacity-60">Wednesday (Biryani Special)</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
