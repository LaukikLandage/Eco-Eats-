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
  Play
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  return (
    <main className="bg-[#F9FBFA] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Background Gradients */}
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

          {/* Stats Bar */}
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

      {/* Problem Section */}
      <section id="problem" className="py-32 px-6 bg-white rounded-[4rem] relative z-10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                The mess waste <br /> <span className="text-slate-400">crisis is real.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md">
                University dining halls face unique challenges that lead to inefficiency and massive environmental impact.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Trash2,
                  title: "High Food Waste",
                  desc: "Massive scale production without precise demand knowledge leads to tons of daily waste.",
                },
                {
                  icon: AlertCircle,
                  title: "Uncertainty Drives Excess",
                  desc: "Not knowing how many students will show up causes messes to overprepare every meal.",
                },
                {
                  icon: TrendingUp,
                  title: "Poor Demand Prediction",
                  desc: "Manual tracking fails to capture real-time trends and student preferences accurately.",
                },
                {
                  icon: Clock,
                  title: "Queue Frustration",
                  desc: "Peak hour rushes result in long wait times and suboptimal dining experiences.",
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-[#F9FBFA] p-8 rounded-[2rem] border border-slate-100 flex flex-col items-start gap-4 transition-all duration-300"
                >
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

      {/* Solution Section (Pillars) */}
      <section id="solution" className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-24">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tight">
              One platform. <br /> <span className="text-primary italic tracking-tighter">End-to-end impact.</span>
            </h2>
            <p className="text-slate-500 font-medium text-xl">The three pillars of the EcoEats ecosystem.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Management",
                desc: "Live student turnout tracking and prep-waste analytics for mess administrators.",
                icon: Layers,
                color: "bg-green-50 text-green-600",
                points: ["Waste Analytics", "Demand Forecasting", "Cost Optimization"]
              },
              {
                title: "Student Empowerment",
                desc: "A frictionless web portal for students to indicate presence and get rewarded.",
                icon: Heart,
                color: "bg-primary/10 text-primary-dark",
                points: ["One-Click Feedback", "Sustainability Points", "Eco-Coupons"]
              },
              {
                title: "Circulary Economy",
                desc: "Turning waste into value through gamification and community milestones.",
                icon: Zap,
                color: "bg-orange-50 text-orange-600",
                points: ["Campus Leaderboard", "Waste-to-Wealth", "Verified Impact"]
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="bg-white p-12 rounded-[3.5rem] border border-slate-100 text-left flex flex-col shadow-xl shadow-slate-200/20"
              >
                <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-10`}>
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{pillar.desc}</p>
                <ul className="space-y-4 mt-auto pt-8 border-t border-slate-50">
                  {pillar.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="text-slate-800 font-bold text-sm tracking-tight">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-32 px-6 bg-slate-900 rounded-[4rem] text-white overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-[60vw] h-full bg-primary/5 -skew-x-12 translate-x-1/2 -z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                 <Zap size={14} className="text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Seamless Integration</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                No apps. <br /><span className="text-primary italic">Just impact.</span>
              </h2>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Scan & Register", d: "Scan QR at mess entry—no app download required." },
                  { step: "02", title: "Indicate Presence", d: "Tap 'Eating' button to help kitchen predict demand." },
                  { step: "03", title: "Earn Rewards", d: "Get sustainability points for every meal pre-aligned." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group/item">
                    <span className="text-primary font-black text-2xl italic group-hover/item:scale-110 transition-transform">{item.step}</span>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-400 font-medium">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full aspect-video bg-white/5 border border-white/10 rounded-[3rem] p-12 flex items-center justify-center relative shadow-2xl overflow-hidden">
               <div className="absolute inset-0 bg-primary/10 blur-[120px] -z-10" />
               <div className="text-center font-black italic text-4xl text-white/20 select-none">PORTAL INTERFACE DEMO</div>
               {/* Mock UI Element */}
               <motion.div 
                 initial={{ y: 50, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 bg-white w-2/3 p-8 rounded-t-[2.5rem] shadow-2xl"
               >
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 bg-primary rounded-lg" />
                       <div className="h-4 w-24 bg-slate-100 rounded-full" />
                    </div>
                    <div className="h-4 w-12 bg-slate-50 rounded-full" />
                 </div>
                 <div className="space-y-3">
                   <div className="h-12 w-full bg-primary/20 rounded-xl" />
                   <div className="h-12 w-full bg-slate-50 rounded-xl" />
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { val: "1.2 Tons", label: "Waste Prevented" },
               { val: "₹1.4L", label: "Cost Savings" },
               { val: "500+", label: "Daily Users" },
               { val: "98%", label: "Accuracy Target" }
             ].map((m, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] text-center border border-slate-100 shadow-xl shadow-slate-200/10">
                  <div className="text-4xl font-black text-slate-900 italic tracking-tighter mb-2">{m.val}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-primary-dark">{m.label}</div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-white rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#F9FBFA] rounded-[4rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-sm border border-slate-100/50">
             <div className="lg:w-1/2 space-y-8">
                <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight">
                  Interested <br /><span className="text-primary italic">partnerships?</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-sm">
                  Bring EcoEats to your university and join the sustainability movement.
                </p>
                <Link href="/contact" className="btn-primary inline-flex mt-8 px-12 py-5 font-black text-lg shadow-xl shadow-primary/20">
                   Get in Touch
                </Link>
             </div>
             <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                   <Mail className="text-primary mb-4" size={24} />
                   <h4 className="font-bold text-slate-900 mb-2">Email Us</h4>
                   <p className="text-slate-500 text-sm">work@laukiklandage.com</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                   <Linkedin className="text-primary mb-4" size={24} />
                   <h4 className="font-bold text-slate-900 mb-2">Connect</h4>
                   <p className="text-slate-500 text-sm">Team LinkedIn</p>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
