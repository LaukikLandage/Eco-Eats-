"use client";

import { motion } from "framer-motion";
import { Zap, Heart, CheckCircle, Wind, BarChart3, TrendingUp, AlertCircle } from "lucide-react";

export default function PreparationPage() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-24">
             <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
                <div className="space-y-2">
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">Prep Optimization</h2>
                    <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-[0.3em] italic">AI Prediction vs Real-time Sync</p>
                </div>
                <div className="flex items-center gap-4 bg-primary/10 border border-primary/20 px-6 py-3 rounded-[2rem] shadow-sm">
                    <Zap size={18} fill="currentColor" className="text-primary-dark" />
                    <span className="text-sm font-black text-primary-dark uppercase italic tracking-widest leading-none">Efficiency Target: 98%</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="bg-white p-12 rounded-[4rem] border border-slate-50 shadow-sm space-y-10"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-14 h-14 bg-red-50 rounded-[1.5rem] flex items-center justify-center text-red-500 shadow-inner">
                            <AlertCircle size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 italic tracking-tight uppercase leading-none">Waste Delta Alert</h3>
                    </div>

                    <div className="space-y-6">
                        {[
                            { category: "Staples (Rice/Bread)", val: "12%", status: "Overprep", color: "text-red-500" },
                            { category: "Proteins", val: "2%", status: "Optimal", color: "text-primary" },
                            { category: "Sides/Veg", val: "4%", status: "Optimal", color: "text-primary" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all cursor-pointer">
                                <div>
                                    <h4 className="text-xs font-black text-slate-800 uppercase italic tracking-widest">{item.category}</h4>
                                    <p className={`text-[10px] font-black ${item.color} mt-1.5 uppercase tracking-widest opacity-80`}>{item.status}</p>
                                </div>
                                <span className={`text-2xl font-black italic tracking-tighter ${item.color}`}>{item.val}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="bg-slate-900 p-12 rounded-[4rem] text-white space-y-10 shadow-2xl overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                    
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-14 h-14 bg-primary/20 rounded-[1.5rem] flex items-center justify-center text-primary shadow-inner">
                            <Wind size={28} />
                        </div>
                        <h3 className="text-2xl font-black italic tracking-tight uppercase leading-none">Procurement Insights</h3>
                    </div>

                    <div className="space-y-8">
                         <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
                             <div className="flex items-center justify-between">
                                 <h4 className="text-xs font-black uppercase tracking-widest text-primary-light">Current Prep Cycle Stability</h4>
                                 <span className="text-xs font-black text-primary italic">Grade A</span>
                             </div>
                             <div className="h-3 w-full bg-white/5 rounded-full border border-white/10 overflow-hidden">
                                 <motion.div initial={{ width: 0 }} animate={{ width: "94%" }} className="h-full bg-primary rounded-full shadow-[0_0_20px_rgba(143,236,120,0.5)]" />
                             </div>
                             <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest text-center italic">94% Predicted accuracy based on Weekly Student Selections</p>
                         </div>

                         <div className="grid grid-cols-2 gap-6">
                             <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-3">
                                 <Heart size={24} className="text-red-400" fill="currentColor" />
                                 <span className="text-xl font-black italic">₹4,200</span>
                                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Saved Daily</span>
                             </div>
                             <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex flex-col items-center gap-3">
                                 <BarChart3 size={24} className="text-blue-400" />
                                 <span className="text-xl font-black italic">14% Down</span>
                                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Surplus Delta</span>
                             </div>
                         </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
