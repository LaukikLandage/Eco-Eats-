"use client";

import { motion } from "framer-motion";
import { CreditCard, ArrowUpRight, ArrowDownLeft, Gift, Utensils, History, Info, ChevronRight, Send, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MealWalletPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'history'>('overview');

    const walletStats = {
        totalCredits: 60,
        usedCredits: 18,
        remainingCredits: 42,
        breakdown: [
            { type: "Breakfast", total: 20, used: 6, remaining: 14, color: "bg-blue-500" },
            { type: "Lunch", total: 20, used: 8, remaining: 12, color: "bg-primary" },
            { type: "Dinner", total: 20, used: 4, remaining: 16, color: "bg-orange-500" },
        ]
    };

    const transactions = [
        { id: 1, type: "Sent", meal: "Lunch", to: "Amit Singh", date: "Today, 10:45 AM", amount: 1, status: "Completed" },
        { id: 2, type: "Sold", meal: "Dinner", price: "₹45", date: "Yesterday", amount: 1, status: "Success" },
        { id: 3, type: "Received", meal: "Breakfast", from: "Priya Rao", date: "2 days ago", amount: 1, status: "Added" },
        { id: 4, type: "Donated", meal: "Lunch", to: "Community Pool", date: "3 days ago", amount: 2, status: "Thank You!" },
    ];

    return (
        <div className="space-y-10 max-w-2xl mx-auto pb-32">
            {/* Header */}
            <header className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight italic uppercase leading-none">Meal Wallet</h1>
                    <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest italic">Digital Asset Management</p>
                </div>
                <div className="w-14 h-14 bg-slate-900 text-primary rounded-[1.5rem] flex items-center justify-center shadow-2xl">
                    <CreditCard size={28} />
                </div>
            </header>

            {/* Wallet Balance Card */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden group shadow-2xl"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                
                <div className="relative z-10 space-y-8">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Total Available Assets</p>
                            <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase">{walletStats.remainingCredits} <span className="text-2xl text-primary font-bold tracking-normal italic uppercase">Meals</span></h2>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Usage Efficiency</p>
                           <p className="text-2xl font-black text-primary italic uppercase leading-none mt-1">92%</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
                        <Link href="#transfer" className="flex flex-col items-center gap-3 group/btn">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-slate-900 transition-all shadow-inner">
                                <Send size={24} />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/btn:text-white transition-colors">Transfer</span>
                        </Link>
                        <Link href="/demo/student/marketplace" className="flex flex-col items-center gap-3 group/btn">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-slate-900 transition-all shadow-inner">
                                <ShoppingBag size={24} />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/btn:text-white transition-colors">Market</span>
                        </Link>
                        <button className="flex flex-col items-center gap-3 group/btn">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-slate-900 transition-all shadow-inner">
                                <Heart size={24} />
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/btn:text-white transition-colors">Donate</span>
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex bg-slate-50 p-2 rounded-[2rem] gap-2 border border-slate-100">
                <button 
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'overview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    Overview
                </button>
                <button 
                    onClick={() => setActiveTab('history')}
                    className={`flex-1 py-4 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'history' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    Activity History
                </button>
            </div>

            {activeTab === 'overview' ? (
                <div className="space-y-6">
                    {walletStats.breakdown.map((item, idx) => (
                        <motion.div 
                            key={item.type}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white border border-slate-100 p-8 rounded-[2.5rem] group hover:border-primary transition-all"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 ${item.color} bg-opacity-10 rounded-xl flex items-center justify-center ${item.color.replace('bg-', 'text-')}`}>
                                        <Utensils size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tighter">{item.type}</h3>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.remaining} of {item.total} Available</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-black text-slate-900 italic tracking-tighter">{Math.round((item.remaining / item.total) * 100)}%</span>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Unused</p>
                                </div>
                            </div>
                            
                            <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(item.remaining / item.total) * 100}%` }}
                                    className={`h-full rounded-full ${item.color} shadow-lg`}
                                />
                            </div>
                        </motion.div>
                    ))}

                    <div className="bg-primary/5 border border-primary/20 p-8 rounded-[3rem] flex items-center gap-6">
                         <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-slate-900 shadow-xl shadow-primary/20 animate-bounce">
                             <Info size={32} />
                         </div>
                         <div className="space-y-1">
                             <h4 className="text-sm font-black text-slate-900 uppercase italic tracking-tight">Marketplace Tip</h4>
                             <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed">
                                You have 16 dinner credits. Sell one for ₹45 to earn wallet points!
                             </p>
                         </div>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    {transactions.map((tx, idx) => (
                        <motion.div 
                            key={tx.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="bg-white border border-slate-50 p-6 rounded-[2rem] flex items-center justify-between hover:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-5">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${
                                    tx.type === 'Sent' ? 'bg-orange-50 text-orange-500' :
                                    tx.type === 'Received' ? 'bg-blue-50 text-blue-500' :
                                    tx.type === 'Sold' ? 'bg-green-50 text-green-600' : 'bg-primary/10 text-primary-dark'
                                }`}>
                                    {tx.type === 'Sent' ? <ArrowUpRight size={22} /> :
                                     tx.type === 'Received' ? <ArrowDownLeft size={22} /> :
                                     tx.type === 'Sold' ? <ShoppingBag size={22} /> : <Gift size={22} />}
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-slate-900 uppercase italic tracking-tight">{tx.type} {tx.meal} Credit</h4>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{tx.type === 'Sent' ? `To: ${tx.to}` : tx.type === 'Received' ? `From: ${tx.from}` : tx.type === 'Sold' ? `Price: ${tx.price}` : `To: ${tx.to}`}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-black text-slate-900 uppercase italic tracking-tighter">{tx.date}</p>
                                <p className={`text-[9px] font-black uppercase tracking-widest mt-1 ${tx.status === 'Completed' || tx.status === 'Success' ? 'text-primary' : 'text-slate-400'}`}>{tx.status}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
