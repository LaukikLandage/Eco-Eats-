"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, Users, BarChart3, TrendingDown, 
  ArrowUpRight, ArrowDownRight, Clock, 
  Calendar, Download, Search, Check, X,
  Zap,
  Target
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
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

const engagementData = [
  { time: '7AM', students: 120 },
  { time: '9AM', students: 450 },
  { time: '11AM', students: 180 },
  { time: '1PM', students: 580 },
  { time: '3PM', students: 150 },
  { time: '7PM', students: 620 },
  { time: '9PM', students: 200 },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-10 max-w-7xl mx-auto pb-24">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Daily Waste", val: "1.2 kg", change: "-15%", up: false, icon: TrendingDown, color: "text-primary-dark", bg: "bg-primary/10" },
                    { label: "Active Students", val: "2,450", change: "+12%", up: true, icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
                    { label: "Redelivery Src", val: "₹12,400", change: "+5%", up: true, icon: Target, color: "text-purple-500", bg: "bg-purple-50" },
                    { label: "Health Score", val: "94/100", change: "+2%", up: true, icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-100/50 transition-all group"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <stat.icon size={28} />
                            </div>
                            <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-widest ${stat.up ? 'text-blue-500' : 'text-primary-dark'}`}>
                                {stat.up ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                                {stat.change}
                            </div>
                        </div>
                        <h4 className="text-3xl font-black text-slate-900 tracking-tighter italic">{stat.val}</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Waste Trend */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-2 bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-10"
                >
                    <div className="flex items-center justify-between px-2">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">Waste Convergence</h3>
                            <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest italic opacity-60">Efficiency analytics vs goal</p>
                        </div>
                        <div className="flex items-center gap-3">
                           <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Real-time Feed</span>
                        </div>
                    </div>
                    
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={wasteData}>
                                <defs>
                                    <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
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
                                <Area type="monotone" dataKey="waste" stroke="#81DD67" strokeWidth={5} fillOpacity={1} fill="url(#colorWaste)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Peak Times */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-900 p-10 rounded-[3rem] text-white space-y-10 shadow-2xl relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[100px] -mr-24 -mt-24 group-hover:bg-primary/20 transition-all duration-700" />
                    
                    <div className="px-2">
                        <h3 className="text-2xl font-black tracking-tight italic uppercase">Turnout Peak</h3>
                        <p className="text-[10px] font-black text-primary-light mt-2 uppercase tracking-widest italic opacity-80">Logistical load balancing</p>
                    </div>

                    <div className="h-[350px] w-full pt-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={engagementData}>
                                <Tooltip 
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: '#0F172A', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '10px', fontWeight: 'black' }}
                                />
                                <Bar dataKey="students" radius={[8, 8, 0, 0]}>
                                    {engagementData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8FEC78' : '#81DD67'} opacity={0.9} />
                                    ))}
                                </Bar>
                                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 9, fontWeight: 900, fill: '#475569' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between group-hover:bg-white/10 transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                                <Clock size={20} className="text-primary" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest italic">Optimal Prep Window</span>
                        </div>
                        <span className="text-lg font-black text-primary italic">12:15 PM</span>
                    </div>
                </motion.div>
            </div>
            
            {/* Action Items Simulation */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase">Logistical Flow Control</h3>
                    <div className="h-px flex-1 bg-slate-100 mx-8 opacity-60" />
                    <div className="flex items-center gap-3">
                       <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Simulation Mode</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { user: "Mess B Section", action: "Capacity at 84%", time: "Active", type: "success", icon: ShieldCheck },
                      { user: "Central Store", action: "Procurement alert", time: "Review", type: "warning", icon: BarChart3 },
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2.5rem] flex items-center justify-between group hover:border-primary/50 transition-all shadow-sm">
                          <div className="flex items-center gap-6">
                              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-primary transition-all group-hover:scale-110">
                                  <item.icon size={32} />
                              </div>
                              <div>
                                  <h4 className="text-lg font-black text-slate-900 italic uppercase tracking-tighter leading-none">{item.user}</h4>
                                  <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest italic opacity-80">{item.action}</p>
                              </div>
                          </div>
                          <button className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${
                              item.type === 'success' ? 'bg-primary/10 text-primary-dark hover:bg-primary hover:text-white shadow-xl shadow-primary/5' : 'bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white shadow-xl shadow-amber-100'
                          }`}>
                              {item.time}
                          </button>
                      </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
