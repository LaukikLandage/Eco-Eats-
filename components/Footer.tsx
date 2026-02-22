"use client";

import { Leaf, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                            <Leaf size={18} className="text-white" />
                        </div>
                        <span className="text-xl font-black text-slate-900">EcoEats.</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="/about" className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">About Us</Link>
                        <Link href="/team" className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">Our Team</Link>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">© 2026 EcoEats Inc.</p>
                        <div className="flex gap-4 text-slate-300">
                            <Globe size={18} className="hover:text-primary cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-50 text-center">
                    <p className="text-slate-400 text-[11px] font-bold">
                        Design and developed by <span className="text-slate-700">Laukik Landage & team EcoEats</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
