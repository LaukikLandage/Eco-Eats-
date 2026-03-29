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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white p-10 rounded-[3.5rem] border border-slate-100 flex flex-col justify-between shadow-sm group hover:shadow-2xl hover:shadow-slate-100 transition-all cursor-pointer"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-dark group-hover:scale-110 transition-transform duration-500">
                           <Star size={32} fill="currentColor" />
                        </div>
                        <span className="text-[10px] font-black text-primary-dark uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">+12k pts</span>
                    </div>
                    <div className="space-y-4 pt-10">
                        <h4 className="text-2xl font-black text-slate-900 italic tracking-tight uppercase leading-none">Reward Velocity</h4>
                        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest italic opacity-80 leading-relaxed">Rate at which students redeem sustainability vouchers</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-primary p-10 rounded-[3.5rem] flex flex-col justify-between shadow-2xl shadow-primary/20 group hover:scale-[1.02] transition-all cursor-pointer"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-slate-900 group-hover:rotate-12 transition-transform duration-500">
                           <MessageCircle size={32} />
                        </div>
                        <div className="flex -space-x-3">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-slate-900 overflow-hidden">
                                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 12}`} alt="User" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4 pt-10">
                        <h4 className="text-2xl font-black text-slate-900 italic tracking-tight uppercase leading-none text-slate-900">Feedback Loops</h4>
                        <p className="text-slate-900 font-black text-xs uppercase tracking-widest italic opacity-60 leading-relaxed">Average 462 sentiment syncs daily per mess unit</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900 p-10 rounded-[3.5rem] border border-slate-800 flex flex-col justify-between shadow-2xl shadow-slate-900/40 text-white group hover:shadow-primary/10 transition-all cursor-pointer"
                >
                    <div className="flex items-center justify-between">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-125 transition-transform duration-700">
                           <Trophy size={32} />
                        </div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest border border-primary/20 bg-primary/5 px-3 py-1 rounded-full">Top 3% Campus</span>
                    </div>
                    <div className="space-y-4 pt-10">
                        <h4 className="text-2xl font-black italic tracking-tight uppercase leading-none text-white">Gamification Index</h4>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest italic opacity-60 leading-relaxed">Engagement ranking based on sustainability leaderboard</p>
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
