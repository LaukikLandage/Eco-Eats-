"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Filter, Download, Zap, PieChart as PieIcon, BarChart2 } from "lucide-react";
import Link from "next/link";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";

const weeklyData = [
    { day: "Mon", waste: 12.5 },
    { day: "Tue", waste: 15.2 },
    { day: "Wed", waste: 10.8 },
    { day: "Thu", waste: 18.4 },
    { day: "Fri", waste: 9.1 },
    { day: "Sat", waste: 21.3 },
    { day: "Sun", waste: 14.7 },
];

const rescueData = [
    { name: "Rescued", value: 340, color: "#81DD67" },
    { name: "Wasted", value: 120, color: "#F1F5F9" },
];

export default function WasteReportPage() {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/demo/student" className="p-2 bg-slate-50 rounded-xl hover:bg-primary/10 transition-colors">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black text-slate-800 tracking-tight italic uppercase">Waste Report</h1>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sustainability Analytics</span>
                    </div>
                </div>
                <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-primary transition-all">
                    <Download size={20} />
                </button>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
                {["This Week", "This Month", "Semester"].map((filter, idx) => (
                    <button
                        key={filter}
                        className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${idx === 0 ? "bg-primary text-slate-900 border-primary" : "bg-white text-slate-500 border-slate-100"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                            <BarChart2 size={20} />
                        </div>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] block">Today's Waste</span>
                    </div>
                    <div>
                        <span className="text-4xl font-black text-slate-900 italic tracking-tighter">14.7 kg</span>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] text-red-500 font-black uppercase bg-red-50 px-2 py-0.5 rounded-full">+12% vs avg</span>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-primary p-8 rounded-[2.5rem] flex flex-col justify-between shadow-xl shadow-primary/20"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-white/20 text-slate-900 rounded-xl flex items-center justify-center">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <span className="text-[10px] text-slate-900 font-black uppercase tracking-[0.2em] block">Meals Rescued</span>
                    </div>
                    <div>
                        <span className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase">52 Meals</span>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="text-[10px] text-slate-900 font-black uppercase bg-white/20 px-2 py-0.5 rounded-full">Weekly Milestone</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.section 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-sm"
            >
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                    <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest italic">Weekly Waste Trend</h3>
                    <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
                       Live Data
                    </div>
                </div>
                <div className="h-[300px] w-full p-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 10, fontWeight: 700 }}
                            />
                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 40px -5px rgb(0 0 0 / 0.1)', fontWeight: 'black' }}
                            />
                            <Bar
                                dataKey="waste"
                                fill="#81DD67"
                                radius={[10, 10, 0, 0]}
                                barSize={40}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </motion.section>

            <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-12 shadow-sm"
            >
                <div className="h-[180px] w-full md:w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={rescueData}
                                innerRadius={50}
                                outerRadius={80}
                                paddingAngle={8}
                                dataKey="value"
                                stroke="none"
                            >
                                {rescueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-6">
                    <div className="flex flex-col">
                        <h3 className="font-black text-slate-900 text-xl tracking-tight italic">Meals Rescued</h3>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 italic">Lifetime Impact Visualization</span>
                    </div>
                    <div className="space-y-4">
                        {rescueData.map((item) => (
                            <div key={item.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl group hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">{item.name}</span>
                                </div>
                                <span className="text-lg font-black text-slate-900 italic tracking-tighter">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
