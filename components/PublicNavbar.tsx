"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isDemo = pathname.includes('/demo');

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <Leaf size={20} className="text-slate-900 fill-slate-900/10" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-900 tracking-tighter italic">EcoEats</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-bold transition-all hover:scale-105 ${pathname === link.href ? "text-primary-dark" : "text-slate-500 hover:text-slate-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Demo Access - Hide when already in demo */}
                {!isDemo ? (
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/demo/student" className="text-sm font-bold text-slate-500 hover:text-slate-900 px-4 py-2 transition-colors flex items-center gap-2">
                            <Play size={14} fill="currentColor" />
                            Student Demo
                        </Link>
                        <Link href="/demo/admin" className="btn-primary !py-2 !px-6 !text-sm">
                            University Demo
                        </Link>
                    </div>
                ) : (
                    <div className="hidden md:flex items-center gap-3">
                         <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-dark">Live Demo View</span>
                         </div>
                    </div>
                )}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-bold ${pathname === link.href ? "text-primary-dark" : "text-slate-500"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            {!isDemo && (
                                <>
                                    <div className="h-px bg-slate-100 my-2" />
                                    <Link
                                        href="/demo/student"
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-slate-500 flex items-center gap-2"
                                    >
                                        <Play size={18} fill="currentColor" />
                                        Student Demo
                                    </Link>
                                    <Link
                                        href="/demo/admin"
                                        onClick={() => setIsOpen(false)}
                                        className="btn-primary"
                                    >
                                        University Demo
                                    </Link>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
