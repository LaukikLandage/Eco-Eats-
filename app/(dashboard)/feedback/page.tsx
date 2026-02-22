"use client";

import { motion } from "framer-motion";
import { ChevronLeft, Utensils, ThumbsUp, Trash2, Soup, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeedbackPage() {
    const [selected, setSelected] = useState<string | null>(null);

    const feedbackOptions = [
        { id: "great", label: "Great Meal", icon: ThumbsUp, color: "text-green-500", bg: "bg-green-50" },
        { id: "waste", label: "Too Much Waste", icon: Trash2, color: "text-red-500", bg: "bg-red-50" },
        { id: "not-enough", label: "Not Enough", icon: Soup, color: "text-orange-500", bg: "bg-orange-50" },
        { id: "comments", label: "Comments", icon: MessageCircle, color: "text-blue-500", bg: "bg-blue-50" },
    ];

    const mealDetails = {
        type: "Lunch",
        date: "12/03/2024",
        time: "13:00",
        location: "Raj Mess",
        chef: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cook"
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-6">
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                    <ChevronLeft size={20} className="text-slate-600" />
                </Link>
                <h1 className="text-xl font-bold font-heading text-slate-800">Meal Feedback</h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card space-y-6"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                            <Utensils size={20} />
                        </div>
                        <h2 className="text-lg font-bold text-slate-800">Meal Details</h2>
                    </div>
                    <img src={mealDetails.chef} className="w-12 h-12 bg-slate-100 rounded-full" alt="Chef" />
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div>
                        <span className="text-sm text-slate-400 block">Meal Type:</span>
                        <span className="font-semibold text-slate-700">{mealDetails.type}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-sm text-slate-400 block">Date:</span>
                        <span className="font-semibold text-slate-700">{mealDetails.date}</span>
                    </div>
                    <div>
                        <span className="text-sm text-slate-400 block">Time:</span>
                        <span className="font-semibold text-slate-700">{mealDetails.time}</span>
                    </div>
                    <div className="text-right">
                        <span className="text-sm text-slate-400 block">Location:</span>
                        <span className="font-semibold text-slate-700">{mealDetails.location}</span>
                    </div>
                </div>
            </motion.div>

            <section className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-slate-800 text-center">Your Feedback Matters</h3>
                <div className="grid grid-cols-2 gap-4">
                    {feedbackOptions.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => setSelected(opt.id)}
                            className={`flex flex-col items-center justify-center gap-3 p-6 rounded-3xl border-2 transition-all duration-200 ${selected === opt.id
                                    ? "border-primary bg-primary/5 shadow-md shadow-primary/5"
                                    : "border-transparent bg-white shadow-sm"
                                }`}
                        >
                            <div className={`p-3 rounded-2xl ${opt.bg} ${opt.color}`}>
                                <opt.icon size={28} />
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{opt.label}</span>
                        </button>
                    ))}
                </div>
            </section>

            <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-600">Additional Comments (Optional)</h4>
                <textarea
                    className="input-field min-h-[120px] resize-none"
                    placeholder="Tell us more about your experience..."
                ></textarea>
            </div>

            <button className="btn-primary w-full py-4 text-lg">Submit Feedback</button>
        </div>
    );
}
