"use client";

import { motion } from "framer-motion";
import { Leaf, Target, Eye, Recycle, Zap, Globe, BarChart3, Users, ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const highlights = [
    {
        title: "Reduce Waste",
        desc: "Precision tracking to minimize leftovers and optimize food production.",
        icon: Recycle,
        color: "text-primary-dark",
        bg: "bg-primary/10"
    },
    {
        title: "Earn Rewards",
        desc: "Get rewarded for sustainable habits with points and eco-coupons.",
        icon: Zap,
        color: "text-orange-500",
        bg: "bg-orange-50"
    },
    {
        title: "Smart Flow",
        desc: "Seamlessly manage dining traffic with real-time rush indicators.",
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        title: "Data Insights",
        desc: "Campus-wide analytics to understand and improve consumption patterns.",
        icon: BarChart3,
        color: "text-purple-500",
        bg: "bg-purple-50"
    }
];

export default function AboutPage() {
    return (
        <main className="bg-[#F5F7F8] min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 px-6 overflow-hidden bg-white rounded-b-[4rem] shadow-sm">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10" />
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8"
                    >
                        <Leaf size={16} className="text-primary-dark" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-dark">Our Story & Purpose</span>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1] mb-8"
                            >
                                Reimagining <br />
                                <span className="text-primary italic">campus dining.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed"
                            >
                                EcoEats is a student-led initiative transforming university messes through intelligent design, behavioral science, and real-time data.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-primary/5 rounded-[3rem] aspect-square md:aspect-video flex items-center justify-center border border-primary/10 shadow-2xl overflow-hidden relative group"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,236,120,0.2)_0%,transparent_70%)]"></div>
                            <div className="text-4xl font-black text-primary-dark/20 tracking-tighter italic group-hover:scale-110 transition-transform duration-700">EcoEats Initiative</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-6 space-y-32 py-32">
                {/* Story */}
                <section className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                           <Globe size={24} className="text-primary" />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Built by students, <br />for the planet.</h2>
                        <div className="space-y-6 text-slate-500 font-medium leading-relaxed text-lg">
                            <p>
                                EcoEats was born from a simple observation: campus dining halls produce massive amounts of waste due to a lack of real-time communication between students and kitchens.
                            </p>
                            <p>
                                We realized that by applying **behavioral design** and **flow optimization**, we could significantly reduce prep-waste while making the dining experience smoother for everyone.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between aspect-square">
                          <div className="text-5xl font-black text-primary">40%</div>
                          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Waste reduction targeted</div>
                       </div>
                       <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col justify-between aspect-square translate-y-12">
                          <div className="text-5xl font-black text-primary-light italic">Zero</div>
                          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">App downloads required</div>
                       </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-12 rounded-[3rem] space-y-8 border border-slate-100 shadow-xl shadow-slate-200/20">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-dark">
                            <Target size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Our Mission</h3>
                        <div className="space-y-6 text-slate-500 font-medium">
                            <p>To empower campus communities with tools that make sustainable dining the default choice through:</p>
                            <ul className="space-y-4">
                                {["Live Demand Visibility", "Frictionless Feedback", "Smart Portion Optimization"].map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-primary" />
                                        <span className="text-slate-700 font-bold">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary p-12 rounded-[3rem] space-y-8 shadow-xl shadow-primary/20 text-slate-900 flex flex-col justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-3xl font-black tracking-tight">Our Vision</h3>
                        <p className="text-slate-900/80 font-bold text-2xl leading-tight italic">
                            "To become the global standard for conscious campus dining, eliminating 1 million tons of food waste annually."
                        </p>
                    </div>
                </section>

                {/* Values / Why It Matters */}
                <section className="space-y-20">
                    <div className="text-center space-y-6">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Core Pillars</h2>
                        <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">Innovative solutions built on three foundational principles.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 text-center transition-all duration-500 group"
                            >
                                <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-[1.5rem] mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-3">{item.title}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] transition-all group-hover:bg-primary/20" />
                    <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">Ready to transform <br /> your campus?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/demo/student" className="btn-primary !px-12 !py-6 !text-lg bg-primary hover:bg-primary-dark text-slate-900 font-black">
                            Try Student Demo
                        </Link>
                        <Link href="/demo/admin" className="bg-white/10 hover:bg-white/20 text-white font-black px-12 py-6 rounded-2xl transition-all border border-white/10 text-lg">
                            Try University Demo
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
