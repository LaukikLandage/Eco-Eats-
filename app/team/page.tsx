"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import TeamCard from "@/components/TeamCard";

const teamMembers = [
    {
        name: "Laukik Landage",
        role: "Developer & UI/UX Designer",
        description: "Builds and maintains the web application, designs the user interface, and ensures a smooth and responsive user experience.",
    },
    {
        name: "Priya Verma",
        role: "Project Lead",
        description: "Leads the project planning, coordinates team tasks, and ensures the project progresses smoothly and on schedule.",
    },
    {
        name: "Siddhi Agalave",
        role: "Research & Presentation Lead",
        description: "Conducts research, prepares project insights, and delivers presentations for demos and evaluations.",
    },
    {
        name: "Diksha Singh",
        role: "Research & Documentation Designer",
        description: "Handles project research and creates structured documentation, diagrams, and reports.",
    },
    {
        name: "Mahi Bhat",
        role: "Research & Content Designer",
        description: "Works on project research and creates presentation content, slides, and supporting materials.",
    }
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#F9FBFA] pt-32 pb-32">
            {/* Header Section */}
            <section className="px-6 mb-24 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex items-center gap-2 bg-[#81DD67]/10 border border-[#81DD67]/20 px-3 py-1.5 rounded-full mb-8"
                >
                    <Leaf size={14} className="text-[#81DD67]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#81DD67]">Our Startup Team</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight mb-6"
                >
                    The people behind <br /><span className="text-[#81DD67] italic">EcoEats initiative.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed"
                >
                    A diverse team of passionate individuals working together to eliminate food waste and transform campus dining experiences.
                </motion.p>
            </section>

            {/* Team Grid Section */}
            <section className="px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                        >
                            <TeamCard {...member} />
                        </motion.div>
                    ))}
                    
                    {/* Placeholder for future growth */}
                    <div className="bg-white/40 border-2 border-dashed border-slate-100 rounded-[16px] flex flex-col items-center justify-center p-12 text-center h-full group grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                            <Leaf size={24} />
                        </div>
                        <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">Growing for Good</h3>
                        <p className="text-xs text-slate-300 font-medium mt-2">Driven by sustainability</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
