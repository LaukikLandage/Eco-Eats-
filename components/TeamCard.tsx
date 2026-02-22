"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
    image: string;
}

export default function TeamCard({ name, role, description, image }: TeamMemberProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="card group border border-slate-100 p-6 flex flex-col items-center text-center transition-all bg-white"
        >
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors -z-10" />
                <img
                    src={image}
                    alt={name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl shadow-slate-200/50"
                />
            </div>

            <h3 className="text-xl font-black text-slate-900 mb-1">{name}</h3>
            <span className="text-primary font-bold text-sm tracking-tight mb-4">{role}</span>
            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">
                {description}
            </p>

            <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all cursor-pointer">
                    <Linkedin size={18} />
                </div>
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all cursor-pointer">
                    <Mail size={18} />
                </div>
            </div>
        </motion.div>
    );
}
