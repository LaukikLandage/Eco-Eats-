"use client";

import { motion } from "framer-motion";
import { Users, Heart, Star, Trophy, Zap, MessageCircle, BarChart3, TrendingUp } from "lucide-react";

export default function EngagementPage() {
    return (
        <div className="space-y-12 max-w-7xl mx-auto pb-24">
             <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-4">
                <div className="space-y-3">
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter italic uppercase underline decoration-primary decoration-8 underline-offset-8">Engagement</h2>
                    <p className="text-[12px] font-black text-slate-400 mt-4 uppercase tracking-[0.4em] italic leading-none">Behavioral Science in Action</p>
                </div>
                <div className="flex items-center gap-6 bg-slate-900 border border-slate-800 px-8 py-5 rounded-[2.5rem] shadow-2xl">
                    <div className="flex flex-col items-center gap-1 border-r border-slate-800 pr-6">
                        <span className="text-2xl font-black text-primary italic">84%</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Participation</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl font-black text-primary italic">Top 5%</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Comparison</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                {/* Featured Engagement Insight: Feedback Loops */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-12 md:p-20 rounded-[4rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 shadow-xl shadow-slate-100/50 hover:shadow-2xl hover:shadow-slate-200 transition-all group"
                >
                    <div className="flex flex-col items-center md:items-start gap-8 flex-1">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary-dark group-hover:scale-110 transition-all duration-500">
                           <MessageCircle size={40} />
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="text-4xl md:text-6xl font-black text-slate-900 italic tracking-tight uppercase leading-none">Feedback Loops</h4>
                            <p className="text-slate-500 font-bold text-lg uppercase tracking-widest italic opacity-80 leading-relaxed max-w-xl">Average 462 sentiment syncs daily per mess unit</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-slate-900 overflow-hidden shadow-lg group-hover:translate-y-[-10px] transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <span className="text-[10px] font-black text-primary-dark uppercase tracking-[0.3em] bg-primary/10 px-6 py-2 rounded-full">Active Community Analytics</span>
                    </div>
                </motion.div>
            </div>
            
            <section className="bg-white p-12 rounded-[4rem] border border-slate-50 shadow-sm space-y-12">
               <div className="flex items-center justify-between border-b border-slate-50 pb-8">
                  <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900 italic uppercase italic tracking-tighter leading-none">Unit Engagement Delta</h3>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">Inter-mess performance comparison</p>
                  </div>
                  <BarChart3 size={24} className="text-slate-200" />
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {[
                       { mess: "Central Campus Mess", score: 92, status: "Peak", trend: "+5%" },
                       { mess: "North Block Mess", score: 78, status: "Critical", trend: "-2%" },
                       { mess: "Executive Dining Hall", score: 96, status: "Peak", trend: "+1%" },
                       { mess: "PG Block Mess", score: 84, status: "Stable", trend: "+8%" }
                   ].map((unit, i) => (
                       <div key={i} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100/50 group hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all cursor-pointer">
                           <div className="flex items-center justify-between">
                               <h5 className="text-sm font-black text-slate-900 uppercase italic tracking-tight">{unit.mess}</h5>
                               <div className="flex items-center gap-1.5 text-primary">
                                   <TrendingUp size={12} />
                                   <span className="text-[10px] font-black uppercase tracking-widest">{unit.trend}</span>
                               </div>
                           </div>
                           <div className="space-y-2 pt-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Satisfaction Score</span>
                                    <span className="text-xs font-black text-slate-900">{unit.score}%</span>
                                </div>
                                <div className="h-2 w-full bg-white rounded-full border border-slate-200 overflow-hidden">
                                     <motion.div 
                                        initial={{ width: 0 }} 
                                        whileInView={{ width: `${unit.score}%` }} 
                                        className={`h-full rounded-full ${unit.score > 90 ? 'bg-primary' : unit.score > 80 ? 'bg-blue-500' : 'bg-amber-500'}`} 
                                     />
                                </div>
                           </div>
                       </div>
                   ))}
               </div>
            </section>
        </div>
    );
}
