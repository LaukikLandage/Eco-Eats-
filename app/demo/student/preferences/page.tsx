"use client";

import { motion } from "framer-motion";
import { ChevronLeft, X, Check, Save, Zap, Heart, Ban, Home } from "lucide-react";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const portions = ["Small", "Medium", "Large"];

const foodItems = [
    { name: "Jeera Rice", icon: "🍚", details: "Local Sona Masoori" },
    { name: "Dal Tadka", icon: "🥣", details: "Protein rich lentils" },
    { name: "Paneer Masala", icon: "🥘", details: "Rich curry sauce" },
    { name: "Salad", icon: "🥗", details: "Fresh farm veggies" }
];

function PreferenceContent() {
    const searchParams = useSearchParams();
    const day = searchParams.get('day') || "Monday";
    const meal = searchParams.get('meal') || "Lunch";

    const [selections, setSelections] = useState<Record<string, { eating: boolean, portion: string }>>(
        foodItems.reduce((acc, item) => ({ ...acc, [item.name]: { eating: true, portion: "Medium" } }), {})
    );

    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const toggleEating = (name: string) => {
        setSelections(prev => ({
            ...prev,
            [name]: { ...prev[name], eating: !prev[name].eating }
        }));
    };

    const setPortion = (name: string, portion: string) => {
        setSelections(prev => ({
            ...prev,
            [name]: { ...prev[name], portion }
        }));
    };

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }, 1200);
    };

    return (
        <div className="space-y-8 max-w-xl mx-auto pb-40 relative px-4">
            <header className="flex flex-col gap-3 pt-6">
                <div className="flex items-center gap-4">
                    <Link href="/demo/student/menu" className="p-3 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-black text-slate-900 tracking-tighter italic uppercase">{day} — {meal}</h1>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Select your portions</span>
                    </div>
                </div>
            </header>

            {/* Skip Meal Quick Action */}
            <button className="w-full p-6 bg-red-50 border border-red-100 rounded-[2rem] flex items-center justify-between text-red-500 group transition-all hover:bg-red-100">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <Ban size={20} />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest">Skip this entire meal</span>
                </div>
                <ChevronLeft size={16} className="rotate-180 opacity-40 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="space-y-6">
                {foodItems.map((item, idx) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm transition-all duration-500 overflow-hidden relative ${
                            !selections[item.name].eating ? "opacity-40 scale-[0.98]" : "opacity-100 scale-100 shadow-xl shadow-slate-100"
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-5">
                                <span className="text-4xl">{item.icon}</span>
                                <div className="flex flex-col">
                                    <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">{item.name}</h4>
                                    <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.details}</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => toggleEating(item.name)}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                                    selections[item.name].eating ? "bg-primary text-slate-900 shadow-lg shadow-primary/20 scale-110" : "bg-slate-50 text-slate-300"
                                }`}
                            >
                                {selections[item.name].eating ? <Check size={24} strokeWidth={4} /> : <Ban size={24} />}
                            </button>
                        </div>

                        {selections[item.name].eating && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-10 overflow-hidden"
                            >
                                <div className="flex items-center justify-between gap-2 p-2 bg-slate-50 rounded-2xl">
                                    {portions.map((p) => (
                                        <button
                                            key={p}
                                            onClick={() => setPortion(item.name, p)}
                                            className={`flex-1 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                                                selections[item.name].portion === p ? "bg-white text-primary-dark shadow-sm border border-slate-100 scale-105" : "text-slate-400 hover:text-slate-600"
                                            }`}
                                        >
                                            {p}
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Sticky Save Button */}
            <div className="fixed bottom-32 left-0 right-0 p-6 pointer-events-none z-[100]">
                <div className="max-w-xl mx-auto flex gap-4">
                    <button 
                        onClick={handleSave}
                        disabled={isSaving}
                        className={`pointer-events-auto flex-[2] py-6 rounded-[2rem] flex items-center justify-between px-10 text-[12px] font-black uppercase tracking-[0.3em] transition-all shadow-2xl relative overflow-hidden group ${
                            saved ? "bg-primary text-slate-900" : "bg-slate-900 text-white"
                        }`}
                    >
                        {isSaving ? (
                            <div className="w-full flex justify-center">
                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full" />
                            </div>
                        ) : (
                            <>
                                <span>{saved ? "Preferences Saved!" : "Save Selection"}</span>
                                {saved ? <Check size={20} strokeWidth={4} /> : <Save size={20} />}
                            </>
                        )}
                    </button>
                    <Link 
                        href="/demo/student"
                        className="pointer-events-auto flex-1 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center shadow-xl hover:bg-slate-50 active:scale-95 transition-all text-slate-400 hover:text-primary"
                    >
                        <Home size={22} onClick={() => {}} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function PreferenceSelectionPage() {
    return (
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 animate-pulse">Loading Selection...</div>}>
            <PreferenceContent />
        </Suspense>
    );
}
