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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8"
          >
            The future of campus <br />
            <span className="text-primary italic">dining is circular.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-12"
          >
            EcoEats leverages real-time data and behavioral design to eliminate food waste in university messes while rewarding students for sustainable choices.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/demo/student" className="btn-primary flex items-center gap-3 px-10 py-5 text-lg font-black group shadow-2xl shadow-primary/20">
              <Play size={20} fill="currentColor" />
              Student Demo
            </Link>
            <Link href="/demo/admin" className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-5 rounded-2xl flex items-center gap-3 text-lg font-black transition-all active:scale-[0.98]">
              University Demo
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 mt-24 pt-12 border-t border-slate-100 w-full max-w-4xl"
          >
            {[
              { label: "Waste Reduction", val: "40%", icon: Trash2 },
              { label: "Community", val: "5000+", icon: Users },
              { label: "Direct Access", val: "Zero App", icon: Monitor },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="text-primary-dark opacity-30 mb-3" size={20} />
                <span className="text-4xl font-black text-slate-900 italic tracking-tighter">{stat.val}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1. Problem Section */}
      <section id="problem" className="py-32 px-6 bg-white rounded-[4rem] relative z-10 shadow-sm scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 lg:sticky lg:top-40">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                The Problem
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md italic">
                Food waste in mess halls is a growing concern that impacts both operations and environments.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Trash2, title: "High Food Waste", desc: "Massive scale production without precise demand knowledge leads to tons of daily waste." },
                { icon: AlertCircle, title: "Uncertainty Drives Excess", desc: "Not knowing how many students will show up causes messes to overprepare every meal." },
                { icon: TrendingDown, title: "Poor Demand Prediction", desc: "Manual tracking fails to capture real-time trends and student preferences accurately." },
                { icon: Navigation2, title: "Queue Frustration", desc: "Peak hour rushes result in long wait times and suboptimal dining experiences." }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="bg-[#F9FBFA] p-8 rounded-[2rem] border border-slate-100 flex flex-col items-start gap-4 transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-50">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Solution Section */}
      <section id="solution" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Zap size={14} className="text-primary-dark" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark italic">Our Solution</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight">
              Behavior design + <br /> <span className="text-primary italic tracking-tighter">smart flow system</span>
            </h2>
            <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">
              A friction-free ecosystem where smart design meets operational efficiency. No apps, no logins, just clean intelligent dining.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 text-left space-y-6 shadow-xl shadow-slate-200/20">
                <div className="w-16 h-16 bg-primary/10 text-primary-dark rounded-2xl flex items-center justify-center">
                    <Heart size={32} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 italic uppercase">Behavior Design</h3>
                <p className="text-slate-500 font-medium leading-relaxed">
                   Leveraging psychological nudges and gamification to encourage students to pre-indicate meal choices and reduce plate waste.
                </p>
             </div>
             <div className="bg-slate-900 p-12 rounded-[3.5rem] text-left space-y-6 shadow-2xl shadow-slate-900/40">
                <div className="w-16 h-16 bg-white/10 text-primary rounded-2xl flex items-center justify-center">
                    <Share2 size={32} />
                </div>
                <h3 className="text-3xl font-black text-white italic uppercase">Flow Optimization</h3>
                <p className="text-slate-400 font-medium leading-relaxed">
                   Smart queue balancing and dual-serving flows to ensure every student spends less time waiting and more time eating.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section id="features" className="py-32 px-6 bg-white rounded-[4rem] scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="space-y-6">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase italic">Key Features</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Live Rush Indicator", icon: Clock, desc: "Real-time occupancy labels (Low/Medium/High) to help students avoid peak rushes.", badge: "Real-time" },
              { title: "Dual Serving Flow", icon: Layers, desc: "Multi-point distribution logic that reduces mess wait times by up to 50%.", badge: "Efficiency" },
              { title: "Smart Portion Nudge", icon: Zap, desc: "Portion control systems that encourage 'start small, refill freely' habits.", badge: "Behavior" },
              { title: "Waste Awareness Board", icon: BarChart3, desc: "Visualizing meal-level waste data in relatable units (e.g., kgs saved per day).", badge: "Awareness" },
              { title: "Peak Time Insights", icon: TrendingUp, desc: "Data-driven prep cycles that help staff prepare exactly what's needed.", badge: "Logistics" }
            ].map((f, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="p-10 bg-[#F9FBFA] border border-slate-100 rounded-[2.5rem] flex flex-col justify-between group transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary-dark shadow-sm border border-slate-50 group-hover:scale-110 transition-transform">
                      <f.icon size={28} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 px-3 py-1 bg-white rounded-full border border-slate-50">{f.badge}</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 italic tracking-tighter uppercase">{f.title}</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Section */}
      <section id="workflow" className="py-32 px-6 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto space-y-24 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
             <h2 className="text-4xl md:text-7xl font-black tracking-tight uppercase italic leading-none">How It Works</h2>
             <p className="text-slate-400 font-medium text-lg uppercase tracking-widest italic">ecoeats System Flow Visualization</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
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
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-8 group hover:bg-white/10 transition-all"
              >
                <div className={`w-14 h-14 ${node.c} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                   <node.icon size={24} />
                </div>
                <div className="space-y-4">
                   <h5 className="text-lg font-black italic uppercase tracking-tighter text-white">{node.t}</h5>
                   <ul className="space-y-2">
                     {node.items.map((item) => (
                       <li key={item} className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                         <ChevronRight size={10} className="text-primary" /> {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary p-12 rounded-[3.5rem] text-slate-900 border border-white shadow-2xl shadow-primary/20 text-center max-w-4xl mx-auto relative group hover:scale-[1.02] transition-transform">
             <div className="absolute inset-0 bg-white/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
             <p className="text-2xl md:text-4xl font-black italic tracking-tighter uppercase relative z-10">
                "A seamless mess experience with reduced waste, better flow, and happier students & staff"
             </p>
          </div>
        </div>
      </section>

      {/* 5. Impact Section */}
      <section id="impact" className="py-32 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col items-center text-center gap-6">
             <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight uppercase italic underline decoration-primary decoration-8 underline-offset-8">Impact</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { val: "40%", label: "Reduced Food Waste", icon: Trash2 },
               { val: "85%", label: "Student Satisfaction", icon: Heart },
               { val: "30%", label: "Staff Efficiency", icon: Zap },
               { val: "Active", label: "Sustainable Campus", icon: Leaf }
             ].map((m, i) => (
               <div key={i} className="bg-white p-12 rounded-[3.5rem] text-center border border-slate-100 shadow-xl shadow-slate-200/10 group hover:border-primary transition-all">
                  <div className="w-14 h-14 bg-primary/10 text-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    <m.icon size={24} />
                  </div>
                  <div className="text-5xl font-black text-slate-900 italic tracking-tighter mb-4">{m.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{m.label}</div>
               </div>
             ))}
          </div>

          <div className="bg-[#111827] rounded-[4rem] p-12 md:p-24 text-center space-y-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-0 blur-3xl" />
              <h3 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase relative z-10 leading-none">
                 Ready to transform <br /><span className="text-primary">your mess?</span>
              </h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                 <Link href="/contact" className="btn-primary px-12 py-5 text-xl font-black shadow-2xl shadow-primary/20">
                    Get in Touch
                 </Link>
              </div>
          </div>
        </div>
      </section>
    </main>
  );
}
