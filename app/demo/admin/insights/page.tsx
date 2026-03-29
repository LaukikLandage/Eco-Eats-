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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Portion Distribution */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-100 transition-all group"
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 bg-primary/10 text-primary-dark rounded-2xl flex items-center justify-center shadow-sm">
                            <BarChart2 size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 italic uppercase">Portion Mix</h3>
                    </div>
                    <div className="h-[280px] w-full">
                        <SafeChart height={280}>
                            <BarChart data={portionData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fontWeight: 'black', fill: '#94a3b8' }} />
                                <YAxis hide />
                                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '20px', border: 'none', fontWeight: 'black', fontSize: '10px' }} />
                                <Bar dataKey="value" radius={[12, 12, 0, 0]} barSize={50}>
                                    {portionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </SafeChart>
                    </div>
                </motion.div>

                {/* Popularity Ranking */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-900 p-12 rounded-[4rem] flex flex-col justify-between shadow-2xl shadow-slate-900/20 group overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 bg-white/10 text-primary rounded-2xl flex items-center justify-center shadow-sm">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-white italic uppercase">Top Demand</h3>
                    </div>
                    <div className="space-y-6 relative z-10">
                        {dishPopularity.map((dish, i) => (
                            <div key={dish.name} className="flex items-center justify-between p-6 bg-white/5 rounded-3xl hover:bg-white/10 transition-all group/item">
                                <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest italic group-hover/item:text-primary transition-colors">{dish.name}</span>
                                <div className="flex items-center gap-4">
                                    <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(dish.value / 240) * 100}%` }}
                                            transition={{ delay: i * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                    <span className="text-xl font-black text-white italic">{dish.value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Smart Insight Panel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-10"
                >
                    <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-100 transition-all group flex-1">
                        <div className="flex items-center gap-4 mb-8">
                             <div className="w-14 h-14 bg-primary/20 text-primary-dark rounded-2xl flex items-center justify-center shadow-sm">
                                <Zap size={24} />
                             </div>
                             <h3 className="text-2xl font-black text-slate-900 italic uppercase underline decoration-primary/30 decoration-8 underline-offset-4">Smart Tips</h3>
                        </div>
                        <p className="text-sm font-black text-slate-400 uppercase tracking-widest leading-relaxed mb-10">
                            Friday Dinner expects <span className="text-red-500">📉 Low Demand</span>. <br />Consider reducing prep by <span className="text-slate-900 border-b-4 border-primary/40">15%</span> to avoid waste.
                        </p>
                        <AlertTriangle className="text-red-500 opacity-20" size={64} />
                    </div>

                    <div className="bg-primary p-12 rounded-[4rem] shadow-xl shadow-primary/20 group hover:scale-[1.02] transition-transform flex items-center gap-8 border-4 border-white">
                        <div className="w-20 h-20 bg-slate-900/10 rounded-3xl flex items-center justify-center text-slate-900">
                             <TrendingUp size={36} />
                        </div>
                        <div className="flex flex-col">
                             <span className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase leading-none">Peak Day</span>
                             <span className="text-[12px] font-black text-slate-900/50 uppercase tracking-[0.3em] mt-2 italic">Wednesday (Biryani Special)</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
