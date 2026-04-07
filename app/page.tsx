"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Leaf, BarChart3, Users, Heart, 
  Trash2, AlertCircle, Clock, TrendingUp, 
  Zap, Layers, CheckCircle2, 
  Github, Mail, Linkedin,
  ExternalLink,
  ChevronRight,
  Monitor,
  MousePointer2,
  Database,
  Search,
  MessageSquare,
  Play,
  Share2,
  Settings,
  ShieldCheck,
  TrendingDown,
  Navigation2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  return (
    <main className="bg-[#F9FBFA] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-48 md:pb-32 px-4 sm:px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[40%] bg-primary/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[50%] bg-primary/10 rounded-full blur-[80px] md:blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1] sm:leading-[0.9] mb-6 md:mb-8 px-2"
          >
            The future of campus <br className="hidden sm:block" />
            <span className="text-primary italic">dining is circular.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-10 md:mb-12 px-4"
          >
            EcoEats leverages real-time data and behavioral design to eliminate food waste in university messes while rewarding students for sustainable choices.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto px-6"
          >
            {/* CTAs: Student (Green) | University (Black) */}
            <Link href="/demo/student" className="w-full sm:w-auto bg-primary text-slate-900 hover:scale-105 active:scale-95 px-10 py-5 rounded-full flex items-center justify-center gap-3 text-lg font-black transition-all shadow-2xl shadow-primary/20">
              <Play size={18} fill="currentColor" />
              Student Demo
            </Link>
            <Link href="/demo/admin" className="w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 px-10 py-5 rounded-full flex items-center justify-center gap-3 text-lg font-black transition-all active:scale-[0.98]">
              University Demo
            </Link>
          </motion.div>


        </div>
      </section>

      {/* 1. Problem Section */}
      <section id="problem" className="py-20 md:py-32 px-4 sm:px-6 bg-white rounded-[2.5rem] md:rounded-[4rem] relative z-10 shadow-sm scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="space-y-6 md:space-y-8 lg:sticky lg:top-40">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                The Problem
              </h2>
              <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed max-w-md italic">
                Food waste in mess halls is a growing concern that impacts both operations and environments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Trash2, title: "High Food Waste", desc: "Massive scale production without precise demand knowledge leads to tons of daily waste." },
                { icon: TrendingDown, title: "Poor Demand Prediction", desc: "Manual tracking fails to capture real-time trends and student preferences accurately." },
                { icon: Navigation2, title: "Queue Frustration", desc: "Peak hour rushes result in long wait times and suboptimal dining experiences." }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#F9FBFA] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 flex flex-col items-start gap-4 transition-all duration-300">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-[1rem] md:rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-50">
                    <item.icon size={20} className="md:size-[24px]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-1 md:mt-2 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solution Section */}
      <section id="solution" className="py-20 md:py-32 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-12 md:space-y-24">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-2 md:mb-4">
              <Zap size={14} className="text-primary-dark" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark italic">Our Solution</span>
            </div>
            <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Behavior design + <br /> <span className="text-primary italic tracking-tighter">smart flow system</span>
            </h2>
            <p className="text-slate-500 font-medium text-base md:text-xl max-w-2xl mx-auto px-4">
              A friction-free ecosystem where smart design meets operational efficiency. No apps, no logins, just clean intelligent dining.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">
             <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] border border-slate-100 text-left space-y-4 md:space-y-6 shadow-xl shadow-slate-200/20">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 text-primary-dark rounded-2xl flex items-center justify-center">
                    <Heart size={24} className="md:size-[32px]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 italic uppercase">Behavior Design</h3>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                   Leveraging psychological nudges and gamification to encourage students to pre-indicate meal choices and reduce plate waste.
                </p>
             </div>
             <div className="bg-slate-900 p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-left space-y-4 md:space-y-6 shadow-2xl shadow-slate-900/40">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 text-primary rounded-2xl flex items-center justify-center">
                    <Share2 size={24} className="md:size-[32px]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase">Flow Optimization</h3>
                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                   Smart queue balancing and dual-serving flows to ensure every student spends less time waiting and more time eating.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section id="features" className="py-20 md:py-32 px-4 sm:px-6 bg-white rounded-[2.5rem] md:rounded-[4rem] scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12 md:space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 text-center md:text-left items-center md:items-start">
            <div className="space-y-4 md:space-y-6">
              <div className="w-12 h-1 bg-primary rounded-full mx-auto md:mx-0" />
              <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase italic">Key Features</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {[
              { title: "Live Rush Indicator", icon: Clock, desc: "Real-time occupancy labels (Low/Medium/High) to help students avoid peak rushes.", badge: "Real-time" },
              { title: "Dual Serving Flow", icon: Layers, desc: "Multi-point distribution logic that reduces mess wait times by up to 50%.", badge: "Efficiency" },
              { title: "Smart Portion Nudge", icon: Zap, desc: "Portion control systems that encourage 'start small, refill freely' habits.", badge: "Behavior" },
              { title: "Waste Awareness Board", icon: BarChart3, desc: "Visualizing meal-level waste data in relatable units (e.g., kgs saved per day).", badge: "Awareness" },
            ].map((f, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="p-8 md:p-10 bg-[#F9FBFA] border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between group transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-100">
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl flex items-center justify-center text-primary-dark shadow-sm border border-slate-50 group-hover:scale-110 transition-transform">
                      <f.icon size={22} className="md:size-[28px]" />
                    </div>
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 px-3 py-1 bg-white rounded-full border border-slate-50">{f.badge}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 italic tracking-tighter uppercase">{f.title}</h4>
                  <p className="text-slate-500 font-medium text-xs md:text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section id="workflow" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24 relative z-10">
          <div className="text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-7xl font-black tracking-tight uppercase italic leading-none">How It Works</h2>
             <p className="text-slate-400 font-medium text-sm md:text-lg uppercase tracking-widest italic">ecoeats System Flow Visualization</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { id: "S", t: "Student Entry", c: "bg-purple-500", icon: Search, items: ["Entry Tracking", "Queue Balancing"] },
              { id: "F", t: "Flow Management", c: "bg-blue-500", icon: Play, items: ["Live Indicators", "Dual Lines"] },
              { id: "P", t: "Portion Control", c: "bg-primary-dark", icon: Zap, items: ["Preference Sync", "Smart Nudges"] },
              { id: "T", t: "Waste Tracking", c: "bg-orange-500", icon: BarChart3, items: ["Relatable Units", "Visual Boards"] },
              { id: "A", t: "Staff Insights", c: "bg-amber-500", icon: Settings, items: ["Prep Optimization", "Data Analysis"] }
            ].map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-col gap-6 md:gap-8 group hover:bg-white/10 transition-all"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 ${node.c} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                   <node.icon size={20} className="md:size-[24px]" />
                </div>
                <div className="space-y-3 md:space-y-4">
                   <h5 className="text-base md:text-lg font-black italic uppercase tracking-tighter text-white">{node.t}</h5>
                   <ul className="space-y-2">
                     {node.items.map((item) => (
                       <li key={item} className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                         <ChevronRight size={10} className="text-primary shrink-0" /> {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-slate-900 border border-white shadow-2xl shadow-primary/20 text-center max-w-4xl mx-auto relative group hover:scale-[1.02] transition-transform">
             <div className="absolute inset-0 bg-white/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
             <p className="text-xl md:text-4xl font-black italic tracking-tighter uppercase relative z-10 leading-tight">
                "A seamless mess experience with reduced waste, better flow, and happier students & staff"
             </p>
          </div>
        </div>
      </section>

      {/* 5. Impact Section */}
      <section id="impact" className="py-20 md:py-32 px-4 sm:px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
             <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-primary decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">Impact</h2>
          </div>

          {/* Removed Impact stats cards as requested. Bridge section below. */}


          <div className="bg-[#111827] rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center space-y-8 md:space-y-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-0 blur-3xl" />
              <h3 className="text-3xl md:text-7xl font-black text-white italic tracking-tighter uppercase relative z-10 leading-tight">
                 Ready to transform <br className="hidden sm:block" /><span className="text-primary">your mess?</span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-10 w-full">
                 <Link href="/contact" className="w-full sm:w-auto bg-primary text-slate-900 hover:scale-105 active:scale-95 px-12 py-5 rounded-full flex items-center justify-center gap-4 text-xl font-black transition-all shadow-2xl shadow-primary/20">
                    Get in Touch
                 </Link>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
