"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface TeamMemberProps {
    name: string;
    role: string;
    description: string;
}

export default function TeamCard({ name, role, description }: TeamMemberProps) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            className="card group border border-slate-100 p-8 flex flex-col items-center text-center transition-all bg-white"
        >


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
