"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Coffee, 
  Sun, 
  Moon, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  Leaf, 
  Flame, 
  Dumbbell,
  Clock,
  ChevronRight
} from "lucide-react";
import { useState } from "react";

const MENU_DATA = {
  MONDAY: {
    theme: "Healthy Day",
    tag: "Healthy 🌿",
    tagIcon: <Leaf size={14} />,
    breakfast: ["Idli Sambar", "Poha", "Veg Upma"],
    lunch: ["Dal + Rice + Chapati", "Cabbage Sabzi + Dal", "Chole + Rice"],
    dinner: ["Veg Khichdi", "Chapati + Dal Fry", "Simple Veg + Rice"]
  },
  TUESDAY: {
    theme: "Normal Day",
    tag: "Normal",
    tagIcon: null,
    breakfast: ["Sabudana Khichdi", "Cornflakes + Milk", "Upma"],
    lunch: ["Veg Kolhapuri", "Dal Tadka + Rice", "Aloo Mutter"],
    dinner: ["Garlic Rice + Dal", "Chapati + Mix Veg", "Jeera Rice + Dal"]
  },
  WEDNESDAY: {
    theme: "Protein Day",
    tag: "Protein 🍗",
    tagIcon: <Dumbbell size={14} />,
    breakfast: ["Moong Dal Chilla", "Sprouts", "Poha"],
    lunch: ["Paneer Tikka Masala", "Soybean Curry", "Dal Tadka + Rice", "Veg Biryani"],
    dinner: ["Chapati + Dal Makhani", "Veg Pulao", "Simple Veg + Chapati"]
  },
  THURSDAY: {
    theme: "Light Day",
    tag: "Light 🌿",
    tagIcon: <Leaf size={14} />,
    breakfast: ["Poha", "Fruit Bowl", "Upma"],
    lunch: ["Dal Fry + Rice", "Sev Bhaji", "Moong Sabzi"],
    dinner: ["Chapati + Simple Veg", "Corn Pulao", "Dal + Rice"]
  },
  FRIDAY: {
    theme: "Protein Day",
    tag: "Protein 🍗",
    tagIcon: <Dumbbell size={14} />,
    breakfast: ["Misal Pav", "Upma", "Cornflakes"],
    lunch: ["Paneer Masala", "Chole", "Dal + Rice", "Veg Pulao"],
    dinner: ["Veg Hariyali", "Chapati + Dal", "Jeera Rice + Dal"]
  },
  SATURDAY: {
    theme: "Normal Day",
    tag: "Normal",
    tagIcon: null,
    breakfast: ["Wada Pav", "Poha", "Upma"],
    lunch: ["Veg Pulao", "Dal + Chapati", "Aloo Sabzi + Rice"],
    dinner: ["Jeera Aloo", "Chapati + Dal", "Veg Khichdi"]
  },
  SUNDAY: {
    theme: "Tasty Day",
    tag: "Popular 🔥",
    tagIcon: <Flame size={14} />,
    breakfast: ["Paratha + Curd", "Poha", "Cornflakes"],
    lunch: ["Pav Bhaji", "Veg Biryani", "Paneer Bhurji", "Pulao + Raita"],
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

export default function WeeklyMenuPage() {
  const [selections, setSelections] = useState<SelectionState>({});
  const [expandedDay, setExpandedDay] = useState<string | null>("MONDAY");

  const handleDishSelect = (day: string, meal: string, dish: string) => {
    setSelections(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: {
          ...prev[day]?.[meal],
          dish,
          skipped: false,
          portion: prev[day]?.[meal]?.portion || 'Full'
        }
      }
    }));
  };

  const handleTogglePortion = (day: string, meal: string) => {
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

  const handleToggleSkip = (day: string, meal: string) => {
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

  return (
    <div className="max-w-2xl mx-auto space-y-10 pb-32">
      {/* Header Section */}
      <header className="space-y-3 px-2">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-2">
          <Zap size={14} className="text-primary-dark" />
          <span className="text-[10px] font-black text-primary-dark uppercase tracking-widest italic">EcoEats Intelligence</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter italic uppercase underline decoration-primary decoration-8 underline-offset-8">Plan Your Weekly Meals</h1>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest italic opacity-70">Help reduce food waste by selecting your meals in advance</p>
      </header>

      {/* Accordion List */}
      <div className="space-y-4">
        {Object.entries(MENU_DATA).map(([day, data]) => {
          const isExpanded = expandedDay === day;
          const daySelectedCount = Object.values(selections[day] || {}).filter(m => m.dish && !m.skipped).length;

          return (
            <motion.div 
              key={day}
              className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${isExpanded ? 'border-primary shadow-2xl shadow-primary/5' : 'border-slate-100 hover:border-slate-200'}`}
            >
              {/* Day Header */}
              <button 
                onClick={() => setExpandedDay(isExpanded ? null : day)}
                className="w-full p-8 flex items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black italic shadow-inner transition-all duration-500 ${isExpanded ? 'bg-primary text-slate-900 scale-110 rotate-3' : 'bg-slate-50 text-slate-400'}`}>
                    {day.substring(0, 3)}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xl font-black text-slate-900 uppercase tracking-tighter italic">{day}</span>
                      {data.tag && (
                        <span className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                          data.theme.includes('Protein') ? 'bg-blue-50 text-blue-500 border border-blue-100' : 
                          data.theme.includes('Tasty') ? 'bg-amber-50 text-amber-500 border border-amber-100' : 
                          data.theme.includes('Light') ? 'bg-emerald-50 text-emerald-500 border border-emerald-100' : 
                          'bg-primary/10 text-primary-dark border border-primary/20'
                        }`}>
                          {data.tagIcon}
                          {data.tag}
                        </span>
                      )}
                    </div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${daySelectedCount > 0 ? 'text-primary-dark animate-pulse' : 'text-slate-300'}`}>
                      {daySelectedCount > 0 ? `${daySelectedCount}/3 Meals Confirmed` : 'No selection'}
                    </p>
                  </div>
                </div>
                <ChevronDown className={`text-slate-300 transition-transform duration-500 ${isExpanded ? 'rotate-180 text-primary' : 'group-hover:translate-y-1'}`} />
              </button>

              {/* Accordion Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-slate-50"
                  >
                    <div className="p-8 space-y-12">
                      {[
                        { name: 'Breakfast', icon: <Coffee />, meals: data.breakfast, time: "☀️ 7:30 - 9:30" },
                        { name: 'Lunch', icon: <Sun />, meals: data.lunch, time: "🍛 12:30 - 2:30" },
                        { name: 'Dinner', icon: <Moon />, meals: data.dinner, time: "🌙 7:30 - 9:30" }
                      ].map((meal) => {
                        const selection = selections[day]?.[meal.name];
                        const isSkipped = selection?.skipped;

                        return (
                          <div key={meal.name} className="space-y-6">
                            {/* Meal Header */}
                            <div className="flex items-center justify-between border-b border-slate-50 pb-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isSkipped ? 'bg-slate-100 text-slate-400' : 'bg-primary/20 text-primary-dark'}`}>
                                  {meal.icon}
                                </div>
                                <div>
                                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest italic">{meal.name}</h3>
                                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-0.5">{meal.time}</p>
                                </div>
                              </div>

                              {/* Skip Toggle */}
                              <label className="flex items-center gap-3 cursor-pointer group/skip">
                                <span className={`text-[9px] font-black uppercase tracking-widest transition-colors ${isSkipped ? 'text-red-500' : 'text-slate-400 group-hover/skip:text-slate-600'}`}>Skip Meal</span>
                                <div 
                                  onClick={() => handleToggleSkip(day, meal.name)}
                                  className={`w-10 h-6 rounded-full relative transition-all duration-300 ${isSkipped ? 'bg-red-500 shadow-lg shadow-red-200' : 'bg-slate-200'}`}
                                >
                                  <motion.div 
                                    animate={{ x: isSkipped ? 18 : 2 }}
                                    className="absolute top-1 left-0 w-4 h-4 bg-white rounded-full shadow-sm" 
                                  />
                                </div>
                              </label>
                            </div>

                            {/* Dish Selection */}
                            {!isSkipped && (
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {meal.meals.map((dish) => {
                                    const dishIsSelected = selection?.dish === dish;
                                    return (
                                      <button
                                        key={dish}
                                        onClick={() => handleDishSelect(day, meal.name, dish)}
                                        className={`p-6 rounded-[1.5rem] border flex items-center justify-between transition-all duration-300 text-left relative overflow-hidden group/dish ${
                                          dishIsSelected 
                                            ? 'bg-primary/5 border-primary shadow-sm' 
                                            : 'bg-white border-slate-100 hover:border-primary/30'
                                        }`}
                                      >
                                        <div className="flex items-center gap-4 relative z-10">
                                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                            dishIsSelected ? 'bg-primary border-primary scale-110' : 'border-slate-200'
                                          }`}>
                                            {dishIsSelected && <CheckCircle2 size={12} strokeWidth={4} className="text-slate-900" />}
                                          </div>
                                          <span className={`text-[11px] font-black uppercase tracking-tight italic ${dishIsSelected ? 'text-slate-900' : 'text-slate-500'}`}>
                                            {dish}
                                          </span>
                                        </div>
                                        {dishIsSelected && (
                                          <motion.div 
                                            layoutId={`activeDish-${day}-${meal.name}`}
                                            className="absolute inset-0 bg-primary/5 -z-0"
                                          />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>

                                {/* Smart Portion Control */}
                                {selection?.dish && (
                                  <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-slate-50 p-6 rounded-[2rem] flex items-center justify-between border border-slate-100/50"
                                  >
                                    <div className="flex items-center gap-4">
                                      <Zap size={18} className="text-amber-500" />
                                      <div>
                                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest italic">Portion Size Control</h4>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">Start small, refill anytime</p>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
                                      {['Half', 'Full'].map((p) => (
                                        <button 
                                          key={p}
                                          onClick={() => handleTogglePortion(day, meal.name)}
                                          className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                                            selection.portion === p ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'
                                          }`}
                                        >
                                          {p}
                                        </button>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                                
                                <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest italic flex items-center gap-2 px-2">
                                  <Clock size={10} className="text-slate-300" /> 
                                  Select before 6 PM for next day preparation
                                </p>
                              </div>
                            )}

                            {isSkipped && (
                              <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-red-50 p-6 rounded-[2rem] border border-red-100 text-center"
                              >
                                <p className="text-[10px] font-black text-red-500 uppercase tracking-widest italic">Meal Session Skipped — No Prep Scheduled</p>
                              </motion.div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Persistence Note */}
      <div className="bg-[#111827] p-10 rounded-[4rem] text-center space-y-6 shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 left-0 w-full h-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
         <AlertCircle size={32} className="text-primary-light mx-auto" />
         <div className="space-y-2 relative z-10">
            <h3 className="text-xl font-black text-white italic uppercase tracking-tighter">Circular Dining Sync</h3>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] italic max-w-sm mx-auto leading-relaxed">
               Selections are used to calculate real-time demand insights, reduces plate waste by up to 40%.
            </p>
         </div>
      </div>
    </div>
  );
}
