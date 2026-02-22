"use client";

import { motion } from "framer-motion";
import { Heart, Target, Leaf } from "lucide-react";
import Link from "next/link";
import TeamCard from "@/components/TeamCard";

const teamMembers = [
    {
        name: "Laukik Landage",
        role: "Project Lead & Full Stack Developer",
        description: "Leads the technical architecture and oversees development & deployment.",
        image: "https://i.pravatar.cc/300?img=11"
    },
    {
        name: "Member 2",
        role: "Backend & Database Engineer",
        description: "Responsible for APIs, database modeling, authentication, and security.",
        image: "https://i.pravatar.cc/300?img=33"
    },
    {
        name: "Member 3",
        role: "UI/UX Designer",
        description: "Designs seamless experiences across mobile and web platforms.",
        image: "https://i.pravatar.cc/300?img=47"
    },
    {
        name: "Member 4",
        role: "Data & Analytics Engineer",
        description: "Builds waste analytics dashboards and sustainability insights.",
        image: "https://i.pravatar.cc/300?img=68"
    },
    {
        name: "Member 5",
        role: "Marketing & Strategy",
        description: "Handles branding, outreach, partnerships, and growth strategy.",
        image: "https://i.pravatar.cc/300?img=53"
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
            {/* Hero Section */}
            <section className="px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 bg-[#22C55E]/10 px-4 py-2 rounded-full mb-8"
                >
                    <Heart size={16} className="text-[#22C55E]" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#22C55E]">The Builders</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                >
                    Meet the Team Behind <span className="text-[#22C55E]">EcoEats</span> 🌱
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
                >
                    &ldquo;We are a passionate group of students building technology to reduce food waste and create sustainable campuses.&rdquo;
                </motion.p>
            </section>

            {/* Team Grid */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <TeamCard {...member} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission Section (on Team Page) */}
            <section className="px-6 max-w-4xl mx-auto text-center py-20 bg-white rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-50 rounded-full -z-10" />
                <div className="w-16 h-16 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center text-[#22C55E] mx-auto mb-8">
                    <Target size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-6">Our Commitment</h2>
                <p className="text-xl text-slate-500 font-medium leading-relaxed italic px-8">
                    &ldquo;EcoEats is committed to reducing food waste in university campuses by combining technology, accountability, and incentives.&rdquo;
                </p>
                <div className="mt-12 flex justify-center gap-12 text-slate-300">
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-slate-900">100%</span>
                        <span className="text-xs font-bold uppercase tracking-widest">Student Led</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
