"use client";

import { motion } from "framer-motion";
import { Search, Filter, ShoppingCart, Tag, User, Utensils, Heart, Info, ArrowLeft, ChevronRight, TrendingDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MealMarketplacePage() {
    const [filter, setFilter] = useState('All');

    const listings = [
        { id: 1, seller: "Anonymous", meal: "Lunch", date: "Today", price: 40, originalPrice: 60, type: "Vegetarian", rating: "4.8" },
        { id: 2, seller: "Rohit K.", meal: "Dinner", date: "Today", price: 35, originalPrice: 60, type: "Non-Veg", rating: "4.5" },
        { id: 3, seller: "Sarah M.", meal: "Breakfast", date: "Tomorrow", price: 25, originalPrice: 40, type: "Light", rating: "4.9" },
        { id: 4, seller: "Anonymous", meal: "Lunch", date: "Tomorrow", price: 45, originalPrice: 60, type: "Special", rating: "4.7" },
        { id: 5, seller: "Amit S.", meal: "Dinner", date: "Tomorrow", price: 40, originalPrice: 60, type: "Vegetarian", rating: "4.6" },
        { id: 6, seller: "Priya R.", meal: "Lunch", date: "Jan 12", price: 30, originalPrice: 60, type: "Balanced", rating: "4.8" },
    ];

    const filteredListings = filter === 'All' ? listings : listings.filter(l => l.meal === filter);

    return (
        <div className="space-y-10 max-w-2xl mx-auto pb-32">
            {/* Nav Header */}
            <header className="flex items-center justify-between">
                <Link href="/demo/student/wallet" className="w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors shadow-sm">
                    <ArrowLeft size={20} />
                </Link>
                <div className="text-center">
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight italic uppercase leading-none">Credit Mart</h1>
                    <p className="text-slate-400 font-black text-[8px] uppercase tracking-widest italic">Secondary Meal Economy</p>
                </div>
                <Link href="/demo/student/wallet" className="w-12 h-12 bg-primary text-slate-900 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-110 transition-transform">
                    <ShoppingCart size={20} />
                </Link>
            </header>

            {/* Search and Filters */}
            <div className="space-y-6">
                <div className="relative group">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                        type="text" 
                        placeholder="Search for meal types or dates..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-[2.5rem] py-6 pl-16 pr-8 text-sm font-bold placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-inner"
                    />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
                    {['All', 'Breakfast', 'Lunch', 'Dinner'].map((type) => (
                        <button 
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                                filter === type ? 'bg-slate-900 text-white border-slate-900 shadow-xl' : 'bg-white text-slate-400 border-slate-100'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Insight */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#111827] rounded-[3.5rem] p-10 text-white relative overflow-hidden shadow-2xl group"
            >
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-40 -mb-40 group-hover:bg-primary/20 transition-all duration-1000" />
                <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                             <TrendingDown className="text-primary" size={18} />
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Market Opportunity</span>
                        </div>
                        <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none">Save up to 40% <br /><span className="text-primary italic">Today</span></h3>
                    </div>
                    <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center border border-white/5 shadow-inner">
                        <Tag size={32} className="text-primary-light rotate-12" />
                    </div>
                </div>
            </motion.div>

            {/* Listing Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredListings.map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white border border-slate-100 p-8 rounded-[3rem] group hover:border-primary hover:shadow-2xl hover:shadow-primary/5 transition-all"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 shadow-inner group-hover:bg-primary/10 transition-colors">
                                    <Utensils size={24} className="text-slate-400 group-hover:text-primary transition-colors" />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{item.meal}</h4>
                                        <span className="bg-slate-50 text-slate-400 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-primary/20 group-hover:text-primary-dark transition-colors">{item.type}</span>
                                    </div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <User size={10} className="inline opacity-40" /> {item.seller} • {item.date}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-slate-300 text-sm line-through block font-black decoration-2 opacity-60">₹{item.originalPrice}</span>
                                <span className="text-3xl font-black text-slate-900 italic tracking-tighter">₹{item.price}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="flex-1 bg-slate-900 text-white rounded-[1.5rem] py-5 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-black active:scale-95 transition-all">
                                Buy Instant
                            </button>
                            <button className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-[1.5rem] flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all">
                                <Heart size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Sticky Info */}
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-[3rem] flex items-center gap-6">
                 <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                     <Info size={32} />
                 </div>
                 <div className="space-y-1">
                     <h4 className="text-sm font-black text-slate-900 uppercase italic tracking-tight">Cutoff Policy</h4>
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed">
                        Transfers and sells are disabled 2 hours before the meal serving time.
                     </p>
                 </div>
            </div>
        </div>
    );
}
