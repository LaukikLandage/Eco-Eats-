"use client";

import { motion } from "framer-motion";
import { FileText, Download, ShieldCheck, BarChart3, Clock, Zap, Target, Search } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="space-y-12 max-w-7xl mx-auto pb-24">
             <section className="flex flex-col md:flex-row md:items-center justify-between gap-10 pt-4">
                <div className="space-y-3">
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter italic uppercase">Analytics Reports</h2>
                    <p className="text-[12px] font-black text-slate-400 mt-4 uppercase tracking-[0.4em] italic leading-none">Institutional Sustainability Documentation</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                   <div className="relative w-full sm:w-64 group/search">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/search:text-primary transition-colors" size={18} />
                      <input 
                        type="text" 
                        placeholder="Search Reports..." 
                        className="w-full bg-white border border-slate-100 rounded-[2rem] pl-16 pr-8 py-5 text-sm font-black uppercase tracking-widest italic outline-none focus:border-primary shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all placeholder:text-slate-200"
                      />
                   </div>
                   <button className="btn-primary !px-10 !py-5 flex items-center gap-4 text-xs font-black uppercase tracking-widest italic shadow-primary/30 active:scale-95 transition-all">
                      <Download size={20} /> Latest Bundle
                   </button>
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Quarterly Impact", date: "June 2024", size: "4.2 MB", type: "PDF", icon: Target, color: "text-primary-dark", bg: "bg-primary/10" },
                    { title: "Mess Efficiency Audit", date: "May 2024", size: "1.8 MB", type: "CSV", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-50" },
                    { title: "Student Sentiment", date: "May 2024", size: "2.5 MB", type: "PDF", icon: BarChart3, color: "text-purple-500", bg: "bg-purple-50" },
                    { title: "Waste Convergence", date: "April 2024", size: "3.1 MB", type: "PDF", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                    { title: "Prep Utilization", date: "April 2024", size: "0.9 MB", type: "XLSX", icon: Clock, color: "text-red-500", bg: "bg-red-50" },
                ].map((doc, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-10 rounded-[3.5rem] border border-slate-100 flex flex-col justify-between shadow-sm group hover:shadow-2xl hover:shadow-slate-100 transition-all cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className={`w-16 h-16 ${doc.bg} ${doc.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm shadow-slate-200`}>
                               <doc.icon size={32} />
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{doc.type}</span>
                        </div>
                        <div className="space-y-4 pt-10">
                            <h4 className="text-xl font-black text-slate-900 italic tracking-tight uppercase leading-none">{doc.title}</h4>
                            <div className="flex items-center justify-between opacity-60">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{doc.date}</p>
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{doc.size}</p>
                            </div>
                        </div>
                        <button className="w-full mt-10 py-5 bg-slate-900 text-white rounded-[1.5rem] flex items-center justify-between px-8 text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-primary group-hover:text-slate-900 transition-all duration-300">
                           <span>Download Report</span>
                           <Download size={14} />
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
