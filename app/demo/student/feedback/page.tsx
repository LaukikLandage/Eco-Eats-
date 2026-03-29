/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Utensils, ThumbsUp, Trash2, Soup, MessageCircle, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeedbackPage() {
    const [selected, setSelected] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const feedbackOptions = [
        { id: "great", label: "Great Meal", icon: ThumbsUp, color: "text-green-500", bg: "bg-green-50" },
        { id: "waste", label: "Too Much Waste", icon: Trash2, color: "text-red-500", bg: "bg-red-50" },
        { id: "not-enough", label: "Not Enough", icon: Soup, color: "text-orange-500", bg: "bg-orange-50" },
        { id: "comments", label: "Comments", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50" },
    ];

    const mealDetails = {
        type: "Lunch",
        date: "Today, June 12",
        time: "13:00",
        location: "Central Campus Mess",
        chef: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cook"
    };

    const handleSubmission = () => {
        setSubmitted(true);
        setTimeout(() => {
            // In a real app we'd redirect or reset
        }, 3000);
    };

    return (
        <div className="space-y-8 max-w-2xl mx-auto pb-20">
            <div className="flex items-center justify-between bg-white px-6 py-4 rounded-[2rem] border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/demo/student-dashboard" className="p-2.5 bg-slate-50 rounded-2xl hover:bg-primary/10 transition-colors">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black text-slate-800 tracking-tight italic uppercase">Meal Feedback</h1>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Impact through Voice</span>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {!submitted ? (
                    <motion.div 
                        key="feedback-form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-8"
                    >
                        <section className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-dark">
                                        <Utensils size={28} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-lg font-black text-slate-900 italic tracking-tight uppercase leading-none">Your Recent Meal</h2>
                                        <span className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest italic">{mealDetails.location}</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <img src={mealDetails.chef} className="w-14 h-14 bg-slate-50 rounded-full border-2 border-white shadow-lg" alt="Chef" />
                                    <div className="absolute -bottom-1 -right-1 bg-primary w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                        <Star size={10} fill="currentColor" className="text-slate-900" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div className="space-y-1">
                                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Meal Type</span>
                                    <span className="font-black text-slate-900 italic text-lg uppercase tracking-tighter block">{mealDetails.type}</span>
                                </div>
                                <div className="space-y-1 text-right">
                                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Timestamp</span>
                                    <span className="font-black text-slate-900 italic text-lg uppercase tracking-tighter block">{mealDetails.date}</span>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h3 className="text-xl font-black text-slate-900 italic tracking-tight uppercase text-center">How was the experience?</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {feedbackOptions.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => setSelected(opt.id)}
                                        className={`flex flex-col items-center justify-center gap-4 p-8 rounded-[2.5rem] border-4 transition-all duration-300 group ${selected === opt.id
                                            ? "border-primary bg-primary/5 shadow-xl shadow-primary/5"
                                            : "border-transparent bg-white shadow-sm hover:border-slate-100"
                                            }`}
                                    >
                                        <div className={`p-4 rounded-2xl ${opt.bg} ${opt.color} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                            <opt.icon size={32} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        <div className="space-y-4">
                            <div className="flex items-center gap-2 px-2">
                                <MessageCircle size={14} className="text-slate-400" />
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Additional Nuance (Optional)</h4>
                            </div>
                            <textarea
                                className="w-full bg-white border border-slate-100 rounded-[2.5rem] p-8 min-h-[160px] resize-none outline-none focus:border-primary transition-all font-medium text-slate-700 shadow-sm"
                                placeholder="Help the kitchen staff improve..."
                            ></textarea>
                        </div>

                        <button 
                            disabled={!selected}
                            onClick={handleSubmission}
                            className={`w-full py-6 rounded-3xl text-sm font-black uppercase tracking-[0.3em] shadow-2xl transition-all active:scale-95 ${
                                selected 
                                ? "bg-slate-900 text-white shadow-slate-900/20 hover:bg-slate-800"
                                : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                            }`}
                        >
                            Sync Feedback
                        </button>
                    </motion.div>
                ) : (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-12 rounded-[4rem] text-center space-y-8 border border-slate-100 shadow-2xl shadow-slate-200/50 my-10"
                    >
                        <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center text-slate-900 mx-auto shadow-xl shadow-primary/30">
                            <CheckCircle size={48} className="animate-[bounce_2s_infinite]" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase leading-tight">Insight Received.</h2>
                            <p className="text-slate-500 font-bold text-lg max-w-xs mx-auto">Your feedback has been synced with the mess dashboard. +25 Eco Pts earned!</p>
                        </div>
                        <Link 
                            href="/demo/student-dashboard"
                            className="inline-flex items-center gap-2 text-primary-dark font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
                        >
                            Back to Hub <ChevronLeft size={16} className="rotate-180" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
