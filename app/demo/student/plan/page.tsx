"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ChevronRight, 
  Utensils, 
  Zap, 
  Info, 
  Leaf, 
  Flame, 
  Dumbbell, 
  Clock,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MENU_DATA = {
  MONDAY: {
    theme: "Healthy",
    tag: "Light 🌿",
    breakfast: ["Idli Sambar", "Poha", "Veg Upma"],
    lunch: ["Dal + Rice + Chapati", "Cabbage Sabzi + Dal", "Chole + Rice"],
    dinner: ["Veg Khichdi", "Chapati + Dal Fry", "Simple Veg + Rice"]
  },
  TUESDAY: {
    theme: "Normal",
    tag: "Balanced ⚖️",
    breakfast: ["Sabudana Khichdi", "Cornflakes + Milk", "Upma"],
    lunch: ["Veg Kolhapuri", "Dal Tadka + Rice", "Aloo Mutter"],
    dinner: ["Garlic Rice + Dal", "Chapati + Mix Veg", "Jeera Rice + Dal"]
  },
  WEDNESDAY: {
    theme: "Protein",
    tag: "Protein 🍗",
    breakfast: ["Moong Dal Chilla", "Sprouts", "Poha"],
    lunch: ["Paneer Tikka Masala", "Soybean Curry", "Veg Biryani"],
    dinner: ["Chapati + Dal Makhani", "Veg Pulao", "Simple Veg + Chapati"]
  },
  THURSDAY: {
    theme: "Light",
    tag: "Light 🌿",
    breakfast: ["Poha", "Fruit Bowl", "Upma"],
    lunch: ["Dal Fry + Rice", "Sev Bhaji", "Moong Sabzi"],
    dinner: ["Chapati + Simple Veg", "Corn Pulao", "Dal + Rice"]
  },
  FRIDAY: {
    theme: "Protein",
    tag: "Protein 🍗",
    breakfast: ["Misal Pav", "Upma", "Cornflakes"],
    lunch: ["Paneer Masala", "Chole", "Veg Pulao"],
    dinner: ["Veg Hariyali", "Chapati + Dal", "Jeera Rice + Dal"]
  },
  SATURDAY: {
    theme: "Normal",
    tag: "Popular 🔥",
    breakfast: ["Wada Pav", "Poha", "Upma"],
    lunch: ["Veg Pulao", "Dal + Chapati", "Aloo Sabzi + Rice"],
    dinner: ["Jeera Aloo", "Chapati + Dal", "Veg Khichdi"]
  },
  SUNDAY: {
    theme: "Tasty",
    tag: "Tasty 🍕",
    breakfast: ["Paratha + Curd", "Poha", "Cornflakes"],
    lunch: ["Pav Bhaji", "Veg Biryani", "Paneer Bhurji"],
    dinner: ["Chapati + Dal", "Light Veg Pulao", "Khichdi"]
  }
};

type SelectionState = {
  [day: string]: {
    [meal: string]: {
      dish: string;
      portion: 'Half' | 'Full';
      skipped: boolean;
    }
  }
};

export default function StudentPlanPage() {
  const [selections, setSelections] = useState<SelectionState>({});
  const [activeDay, setActiveDay] = useState<string | null>("MONDAY");

  const toggleSelection = (day: string, meal: string, dish: string) => {
    setSelections(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: {
          dish,
          portion: prev[day]?.[meal]?.portion || 'Full',
          skipped: false
        }
      }
    }));
  };

  const togglePortion = (day: string, meal: string) => {
    setSelections(prev => {
      const current = prev[day]?.[meal];
      if (!current) return prev;
      return {
        ...prev,
        [day]: {
          ...prev[day],
          [meal]: {
            ...current,
            portion: current.portion === 'Full' ? 'Half' : 'Full'
          }
        }
      };
    });
  };

  const toggleSkip = (day: string, meal: string) => {
    setSelections(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: {
          ...prev[day]?.[meal],
          skipped: !prev[day]?.[meal]?.skipped
        }
      }
    }));
  };

  const isSelected = (day: string, meal: string, dish: string) => selections[day]?.[meal]?.dish === dish && !selections[day]?.[meal]?.skipped;

  return (
    <div className="space-y-10 max-w-2xl mx-auto pb-32">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight italic uppercase">Weekly Preferences</h1>
            <p className="text-slate-400 font-black text-[10px] uppercase tracking-widest italic">Personalized Meal Logic</p>
          </div>
          <div className="bg-primary p-4 rounded-2xl shadow-xl shadow-primary/20 flex flex-col items-center justify-center min-w-[3.5rem]">
            <span className="text-xl font-black text-slate-900 leading-none">42%</span>
            <span className="text-[7px] font-black uppercase text-slate-900/60 mt-1">Saved</span>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-900 text-white p-6 rounded-[2rem] shadow-2xl">
          <Clock size={20} className="text-primary animate-pulse" />
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-widest text-primary italic">Deadline Management</p>
            <p className="text-sm font-bold opacity-80 uppercase tracking-tighter italic">Select before 6 PM for next day preparation</p>
          </div>
        </div>
      </header>

      {/* Accordion Layout */}
      <div className="space-y-4">
        {Object.entries(MENU_DATA).map(([day, data]) => {
          const isOpen = activeDay === day;
          const daySelectedCount = Object.values(selections[day] || {}).filter(m => !m.skipped).length;

          return (
            <motion.div 
              key={day}
              className={`bg-white rounded-[2.5rem] border transition-all overflow-hidden ${isOpen ? 'border-primary shadow-2xl shadow-primary/5' : 'border-slate-100'}`}
            >
              {/* Day Header */}
              <button 
                onClick={() => setActiveDay(isOpen ? null : day)}
                className="w-full p-8 flex items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black italic shadow-inner ${isOpen ? 'bg-primary text-slate-900 translate-x-2' : 'bg-slate-50 text-slate-400'} transition-all`}>
                    {day.substring(0, 3)}
                  </div>
                  <div className="text-left space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-black text-slate-900 uppercase tracking-tighter italic">{day}</span>
                      <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        data.theme === 'Protein' ? 'bg-blue-100 text-blue-600' : 
                        data.theme === 'Tasty' ? 'bg-amber-100 text-amber-600' : 
                        data.theme === 'Light' ? 'bg-primary/20 text-primary-dark' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {data.tag}
                      </span>
                    </div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${daySelectedCount > 0 ? 'text-primary-dark' : 'text-slate-400'}`}>
                      {daySelectedCount > 0 ? `${daySelectedCount}/3 Meals Confirmed` : 'No Selection Yet'}
                    </p>
                  </div>
                </div>
                <ChevronDown className={`text-slate-300 transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
              </button>

              {/* Day Content */}
              {isOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-8 pb-10 space-y-10 border-t border-slate-50 pt-8"
                >
                  {['Breakfast', 'Lunch', 'Dinner'].map((meal) => {
                    const dishOptions = data[meal.toLowerCase() as keyof typeof data] as string[];
                    const currentSelection = selections[day]?.[meal];

                    return (
                      <div key={meal} className="space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                          <div className="flex items-center gap-3">
                            <Utensils size={18} className="text-primary-dark" />
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest italic">{meal}</h3>
                          </div>
                          
                          <button 
                            onClick={() => toggleSkip(day, meal)}
                            className={`flex items-center gap-2 px-4 py-1.5 rounded-full transition-all border ${
                              currentSelection?.skipped ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                            }`}
                          >
                             <span className="text-[9px] font-black uppercase tracking-widest italic">{currentSelection?.skipped ? 'Skipped' : 'Skip Meal'}</span>
                          </button>
                        </div>

                        {!currentSelection?.skipped && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {dishOptions.map((dish) => (
                              <button
                                key={dish}
                                onClick={() => toggleSelection(day, meal, dish)}
                                className={`p-5 rounded-2xl flex items-center justify-between border transition-all text-left ${
                                  isSelected(day, meal, dish) 
                                    ? 'bg-primary/5 border-primary shadow-sm' 
                                    : 'bg-slate-50/50 border-slate-100 hover:border-primary/30'
                                }`}
                              >
                                <span className={`text-[11px] font-black uppercase tracking-tight italic ${isSelected(day, meal, dish) ? 'text-slate-900' : 'text-slate-500'}`}>
                                  {dish}
                                </span>
                                {isSelected(day, meal, dish) && (
                                  <div className="w-5 h-5 bg-primary text-slate-900 rounded-full flex items-center justify-center">
                                    <CheckCircle2 size={12} strokeWidth={3} />
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Smart Controls: Portion Toggle */}
                        {currentSelection && !currentSelection.skipped && (
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-slate-50 p-6 rounded-3xl flex items-center justify-between"
                          >
                            <div className="flex items-center gap-4">
                              <Zap size={16} className="text-amber-500" />
                              <div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Smart Suggestion</p>
                                <p className="text-[11px] font-black text-slate-900 italic uppercase">Optimized Portion Control</p>
                              </div>
                            </div>
                            <button 
                              onClick={() => togglePortion(day, meal)}
                              className="bg-white border border-slate-100 rounded-2xl p-1 flex items-center gap-1 shadow-sm"
                            >
                              {['Full', 'Half'].map((p) => (
                                <span 
                                  key={p}
                                  className={`px-4 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                                    currentSelection.portion === p ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400'
                                  }`}
                                >
                                  {p}
                                </span>
                              ))}
                            </button>
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Persistence Note */}
      <div className="bg-slate-900/5 border border-slate-900/10 p-10 rounded-[3rem] text-center space-y-4">
         <Info size={24} className="text-slate-900 mx-auto opacity-30" />
         <p className="text-xs font-black text-slate-900/60 uppercase tracking-[0.2em] italic max-w-sm mx-auto leading-relaxed">
            Choices are synced across <br />mess analytics to prevent prep-overages.
         </p>
      </div>
    </div>
  );
}
