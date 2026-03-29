"use client";

import { motion } from "framer-motion";
import { 
  BarChart2, ShieldCheck, Clock, Zap, Users, FileText,
  TrendingDown, ArrowUpRight, ArrowDownRight, Target
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer
} from 'recharts';

const wasteData = [
  { day: 'Mon', waste: 45 },
  { day: 'Tue', waste: 52 },
  { day: 'Wed', waste: 38 },
  { day: 'Thu', waste: 48 },
  { day: 'Fri', waste: 30 },
  { day: 'Sat', waste: 25 },
  { day: 'Sun', waste: 20 },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-24">
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10"
            >
                <div className="flex items-center justify-between px-2">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">Multi-Factor Analytics</h3>
                        <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest italic opacity-60">Comparative waste & recovery data</p>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Real-time Feed</span>
                    </div>
                </div>
                
                <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={wasteData}>
                            <defs>
                                <linearGradient id="colorWasteAnalytics" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8FEC78" stopOpacity={0.4}/>
                                    <stop offset="95%" stopColor="#8FEC78" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94A3B8' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94A3B8' }} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', fontSize: '12px', fontWeight: 'black' }}
                            />
                            <Area type="monotone" dataKey="waste" stroke="#81DD67" strokeWidth={5} fillOpacity={1} fill="url(#colorWasteAnalytics)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                    { label: "Efficiency Rate", val: "94.2%", icon: Target, color: "text-blue-500", bg: "bg-blue-50" },
                    { label: "Recovery Delta", val: "+14.8%", icon: TrendingDown, color: "text-primary-dark", bg: "bg-primary/10" },
                    { label: "Peak Reliability", val: "91%", icon: ShieldCheck, color: "text-purple-500", bg: "bg-purple-50" },
                 ].map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-slate-100 transition-all">
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <span className="text-2xl font-black text-slate-900 italic tracking-tighter">{stat.val}</span>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
    );
}
