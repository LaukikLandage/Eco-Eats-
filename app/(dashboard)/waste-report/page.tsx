"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Filter, Download } from "lucide-react";
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
    { name: "Rescued", value: 340, color: "#22C55E" },
    { name: "Wasted", value: 120, color: "#EF4444" },
];

export default function WasteReportPage() {
    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <h1 className="text-xl font-bold font-heading text-slate-800">Waste Report</h1>
                </div>
                <button className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-600">
                    <Download size={20} />
                </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
                {["This Week", "This Month", "All Time"].map((filter, idx) => (
                    <button
                        key={filter}
                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap border transition-all ${idx === 0 ? "bg-primary text-white border-primary" : "bg-white text-slate-500 border-slate-100"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="card text-center p-4">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Today's Waste</span>
                    <span className="text-2xl font-bold text-slate-800">14.7 kg</span>
                    <span className="text-[10px] text-red-500 font-bold block mt-1">+12% from yesterday</span>
                </div>
                <div className="card text-center p-4">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Meals Rescued</span>
                    <span className="text-2xl font-bold text-primary">52</span>
                    <span className="text-[10px] text-green-500 font-bold block mt-1">+5 this week</span>
                </div>
            </div>

            <section className="card p-0 overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <h3 className="font-bold text-slate-800">Weekly Waste Trend</h3>
                </div>
                <div className="h-[250px] w-full p-6 pt-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={weeklyData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "#94a3b8", fontSize: 12 }}
                            />
                            <Tooltip
                                cursor={{ fill: '#f8fafc' }}
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar
                                dataKey="waste"
                                fill="#22C55E"
                                radius={[6, 6, 0, 0]}
                                barSize={30}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>

            <section className="card p-4 flex items-center gap-6">
                <div className="h-[120px] w-1/2">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={rescueData}
                                innerRadius={35}
                                outerRadius={55}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {rescueData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-4">
                    <h3 className="font-bold text-slate-800 text-sm">Meals Rescued</h3>
                    <div className="space-y-2">
                        {rescueData.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-xs text-slate-500">{item.name}</span>
                                </div>
                                <span className="text-xs font-bold text-slate-700">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
