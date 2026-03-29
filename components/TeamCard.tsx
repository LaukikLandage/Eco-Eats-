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
            className="bg-white p-6 md:p-8 rounded-[16px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-slate-50 flex flex-col items-center text-center h-full transition-all duration-300"
        >
            <div className="w-16 h-16 bg-slate-900 rounded-2xl mb-6 flex items-center justify-center text-primary text-xl font-black italic shadow-lg">
                {name.split(' ').map(n => n[0]).join('')}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                {name}
            </h3>
            
            <div className="text-[#81DD67] font-bold mb-6 text-xs uppercase tracking-widest px-4">
                {role}
            </div>
            
            <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8 flex-grow">
                {description}
            </p>

            {/* Divider Line */}
            <hr className="w-full border-slate-100 mb-6" />

            <div className="flex items-center gap-3">
                <a 
                    href="#" 
                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#81DD67]/10 hover:text-[#81DD67] transition-all duration-300 shadow-sm"
                    aria-label="LinkedIn Profile"
                >
                    <Linkedin size={18} />
                </a>
                <a 
                    href="#" 
                    className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:bg-[#81DD67]/10 hover:text-[#81DD67] transition-all duration-300 shadow-sm"
                    aria-label="Send Email"
                >
                    <Mail size={18} />
                </a>
            </div>
        </motion.div>
    );
}
