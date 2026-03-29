"use client";

import { motion } from "framer-motion";
import { Clock, TrendingUp, Users, Zap, Wind } from "lucide-react";
import { 
  BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

const engagementData = [
  { time: '7AM', students: 120 },
  { time: '9AM', students: 450 },
  { time: '11AM', students: 180 },
  { time: '1PM', students: 580 },
  { time: '3PM', students: 150 },
  { time: '7PM', students: 620 },
  { time: '9PM', students: 200 },
];

export default function PeakTimesPage() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-24">
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 p-12 rounded-[3.5rem] text-white space-y-12 shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -mr-32 -mt-32" />
                
                <div className="px-2">
                    <h3 className="text-3xl font-black tracking-tighter italic uppercase">Peak Turnout Analytics</h3>
                    <p className="text-[10px] font-black text-primary-light mt-2 uppercase tracking-widest italic opacity-80">Load balancing and prep window analysis</p>
                </div>

                <div className="h-[400px] w-full pt-8">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={engagementData}>
                            <Tooltip 
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                contentStyle={{ backgroundColor: '#0F172A', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px', fontWeight: 'black' }}
                            />
                            <Bar dataKey="students" radius={[12, 12, 0, 0]}>
                                {engagementData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 5 ? '#8FEC78' : '#81DD67'} opacity={index === 5 ? 1 : 0.7} />
                                ))}
                            </Bar>
                            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#475569' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
                         <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                            <Clock size={20} />
                         </div>
                         <div>
                            <span className="text-2xl font-black italic tracking-tighter">12:15 PM</span>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Primary Peak Load</p>
                         </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
                         <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-500 mb-4">
                            <Wind size={20} />
                         </div>
                         <div>
                            <span className="text-2xl font-black italic tracking-tighter">2h 15m</span>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Avg. Cycle Window</p>
                         </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-between">
                         <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-500 mb-4">
                            <Users size={20} />
                         </div>
                         <div>
                            <span className="text-2xl font-black italic tracking-tighter">620 /hr</span>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Max Capacity Peak</p>
                         </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
