"use client";

import { motion } from "framer-motion";
import { Leaf, Target, Eye, Recycle, Zap, Globe, BarChart3, Users, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const highlights = [
    {
        title: "Reduce Waste",
        desc: "Precision tracking to minimize leftovers and optimize food production.",
        icon: Recycle,
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        title: "Earn Rewards",
        desc: "Get rewarded for sustainable habits with points and eco-coupons.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        title: "Smart Credit Transfer",
        desc: "Seamlessly transfer extra meal credits to peers in real-time.",
        icon: Users,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        title: "Data-Driven Insights",
        desc: "Campus-wide analytics to understand and improve consumption patterns.",
        icon: BarChart3,
        color: "text-purple-500",
        bg: "bg-purple-50"
    }
];

export default function AboutPage() {
    return (
        <main className="bg-[#F5F7F8] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50/50 to-transparent -z-10" />
                <div className="max-w-7xl mx-auto text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-2 bg-[#22C55E]/10 px-4 py-2 rounded-full mb-8"
                    >
                        <Leaf size={16} className="text-[#22C55E]" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-[#22C55E]">Our Story & Purpose</span>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8"
                            >
                                About <span className="text-[#22C55E]">EcoEats</span> 🌱
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl text-slate-400 font-medium max-w-xl leading-relaxed"
                            >
                                Transforming campus dining through technology, accountability, and sustainability.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-50 rounded-[2.5rem] aspect-video flex items-center justify-center border-8 border-white shadow-2xl overflow-hidden"
                        >
                            <div className="text-4xl font-black text-[#22C55E]/30">The Future of Mess</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-6 space-y-32 py-32">
                {/* Story */}
                <section className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-slate-900">Our Story</h2>
                        <div className="space-y-4 text-slate-500 font-medium leading-relaxed">
                            <p>
                                EcoEats was founded with a simple but powerful vision — to reduce food waste in university campuses using smart technology.
                            </p>
                            <p>
                                Every day, large amounts of food are wasted in mess facilities due to lack of tracking, feedback, and awareness. We realized that small behavioral changes, supported by data and incentives, could create a major environmental impact.
                            </p>
                            <p>
                                Built by students, for students — EcoEats combines waste tracking, feedback systems, reward incentives, and credit transfers into one unified sustainability platform.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6">
                        <div className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                                <Globe size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-black text-slate-900 leading-none">Global Impact</div>
                                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Starting Local</div>
                            </div>
                        </div>
                        <div className="text-3xl font-black text-slate-800">1.3B <span className="text-sm font-medium text-slate-400 block tracking-normal">Tons of food wasted globally per year.</span></div>
                        <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-1/3" />
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div className="card p-10 space-y-6 bg-white border-none shadow-xl shadow-green-500/5">
                        <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-500">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
                        <div className="space-y-4 text-slate-500 font-medium">
                            <p>Our mission is to reduce food waste across campuses by empowering students with:</p>
                            <ul className="space-y-2">
                                {["Real-time waste tracking", "Smart analytics", "Reward-based accountability", "Community-driven sustainability"].map(item => (
                                    <li key={item} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="italic text-slate-400">&ldquo;We believe sustainable habits begin with awareness — and awareness begins with data.&rdquo;</p>
                        </div>
                    </div>

                    <div className="card p-10 space-y-6 bg-[#22C55E] border-none shadow-xl shadow-green-500/20 text-white">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-black ">Our Vision</h3>
                        <p className="text-white/80 font-medium text-lg leading-relaxed">
                            &ldquo;To become India&rsquo;s largest campus-based sustainability platform — helping universities measure, reduce, and eliminate food waste while creating environmentally responsible communities.&rdquo;
                        </p>
                    </div>
                </section>

                {/* Why It Matters */}
                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black text-slate-900">Why EcoEats Matters</h2>
                        <p className="text-slate-400 font-medium max-w-2xl mx-auto">Innovative solutions designed specifically for the unique environment of university mess facilities.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card bg-white p-6 border-none text-center group active:scale-95 transition-all"
                            >
                                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-lg font-black text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-slate-900 rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px] transition-all group-hover:bg-green-500/20" />
                    <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to make your campus sustainable?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/signup" className="bg-[#22C55E] hover:bg-green-600 text-white font-black px-10 py-5 rounded-2xl transition-all shadow-xl shadow-green-500/20 flex items-center gap-2">
                            Join EcoEats <ArrowRight size={20} />
                        </Link>
                        <Link href="/#contact" className="bg-white/10 hover:bg-white/20 text-white font-black px-10 py-5 rounded-2xl transition-all border border-white/10 flex items-center gap-2">
                            Contact Us <Mail size={20} />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
