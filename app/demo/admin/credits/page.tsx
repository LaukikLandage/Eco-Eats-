"use client";

import { motion } from "framer-motion";
import { 
  BarChart2, ShieldCheck, Clock, Zap, Users, FileText,
  TrendingDown, ArrowUpRight, ArrowDownRight, Target,
  RefreshCcw, ShoppingCart, Heart, Download, Filter, Search
} from "lucide-react";
import SafeChart from "@/components/SafeChart";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const transactionData = [
  { name: 'Transfers', value: 450, color: '#3B82F6' },
  { name: 'Sales', value: 320, color: '#8FEC78' },
  { name: 'Donations', value: 180, color: '#F97316' },
];

const wasteReductionData = [
  { month: 'Jan', reduced: 120 },
  { month: 'Feb', reduced: 150 },
  { month: 'Mar', reduced: 180 },
  { month: 'Apr', reduced: 210 },
  { month: 'May', reduced: 250 },
];

export default function AdminCreditsDashboard() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-24">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight italic uppercase leading-none">Credit Operations</h1>
                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest italic tracking-[0.2em]">Asset Lifecycle & Waste Analytics</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 bg-white border border-slate-100 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-primary transition-all shadow-sm">
                        <Download size={16} /> Export Report
                    </button>
                    <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 hover:scale-105 active:scale-95 transition-all">
                        Live Monitor
                    </button>
                </div>
            </header>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Transfers", val: "1,280", icon: RefreshCcw, color: "text-blue-500", bg: "bg-blue-50" },
                    { label: "Market Volume", val: "₹45,200", icon: ShoppingCart, color: "text-primary-dark", bg: "bg-primary/10" },
                    { label: "Meals Donated", val: "842", icon: Heart, color: "text-orange-500", bg: "bg-orange-50" },
                    { label: "Waste Avoided", val: "320kg", icon: TrendingDown, color: "text-purple-500", bg: "bg-purple-50" },
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-[3rem] border border-slate-100 flex flex-col gap-6 group hover:border-primary transition-all shadow-sm"
                    >
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-inner`}>
                            <stat.icon size={28} />
                        </div>
                        <div>
                            <span className="text-3xl font-black text-slate-900 italic tracking-tighter">{stat.val}</span>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Transaction Distribution */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm space-y-10"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">Transaction Mix</h3>
                            <p className="text-[9px] font-black text-slate-400 mt-1 uppercase tracking-widest italic opacity-60">Credit utilization types</p>
                        </div>
                        <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-300">
                             <Filter size={18} />
                        </div>
                    </div>
                    
                    <div className="h-[300px] w-full">
                        <SafeChart height={300}>
                            <BarChart data={transactionData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94A3B8' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#94A3B8' }} />
                                <Tooltip 
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1) '}}
                                />
                                <Bar dataKey="value" radius={[12, 12, 12, 12]} barSize={60}>
                                    {transactionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </SafeChart>
                    </div>
                </motion.div>

                {/* Waste Reduction Impact */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-900 p-10 rounded-[3.5rem] border border-slate-800 shadow-2xl space-y-10 text-white"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-white tracking-tight italic uppercase">Waste Saved (kg)</h3>
                            <p className="text-[9px] font-black text-slate-500 mt-1 uppercase tracking-widest italic opacity-60">Monthly impact through credit transfers</p>
                        </div>
                        <div className="bg-primary/20 text-primary px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-primary/20">
                             +24% Target
                        </div>
                    </div>
                    
                    <div className="h-[300px] w-full">
                        <SafeChart height={300}>
                            <BarChart data={wasteReductionData}>
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#64748B' }} />
                                <YAxis hide />
                                <Tooltip 
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ borderRadius: '24px', backgroundColor: '#1E293B', border: 'none', color: '#fff' }}
                                />
                                <Bar dataKey="reduced" fill="#8FEC78" radius={[12, 12, 12, 12]} barSize={40} />
                            </BarChart>
                        </SafeChart>
                    </div>
                </motion.div>
            </div>

            {/* Recent Audit Trail */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase">Audit Trail</h3>
                    <div className="bg-slate-50 p-2 rounded-xl flex items-center gap-4 border border-slate-100">
                         <Search size={16} className="text-slate-300 ml-2" />
                         <input type="text" placeholder="Filter ID/User..." className="bg-transparent border-none text-[10px] font-black uppercase tracking-widest focus:outline-none w-32" />
                    </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm overflow-x-auto">
                    <table className="w-full text-left min-w-[800px]">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Transaction ID</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Type</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Details</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Date/Time</th>
                                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Impact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {[
                                { id: "TX-9021", type: "Market Sale", details: "Student ID 2931 -> 4402", date: "Today, 12:45", impact: "Waste Reused" },
                                { id: "TX-9020", type: "Donation", details: "Student ID 3391 -> Community", date: "Today, 11:30", impact: "Social Good" },
                                { id: "TX-9019", type: "Transfer", details: "Student ID 1102 -> 1105", date: "Today, 09:12", impact: "Efficiency" },
                                { id: "TX-9018", type: "Market Sale", details: "Student ID 5521 -> 9931", date: "Yesterday", impact: "Waste Reused" },
                            ].map((tx, idx) => (
                                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <span className="text-[11px] font-black text-slate-900 uppercase italic tracking-tight">{tx.id}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${
                                            tx.type === 'Donation' ? 'bg-orange-50 text-orange-500 border-orange-100' : 
                                            tx.type === 'Market Sale' ? 'bg-primary/10 text-primary-dark border-primary/20' : 'bg-blue-50 text-blue-500 border-blue-100'
                                        }`}>
                                            {tx.type}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{tx.details}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-[10px] font-black text-slate-900 uppercase italic">{tx.date}</span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <span className="text-[10px] font-black text-primary uppercase italic tracking-tight opacity-0 group-hover:opacity-100 transition-opacity">{tx.impact}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
