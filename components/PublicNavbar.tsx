"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "How It Works", href: "/#features" },
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-[#22C55E] rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                        <Leaf size={24} className="text-white fill-white/20" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-900 tracking-tight">EcoEats<span className="text-[#22C55E]">.</span></span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-bold transition-colors ${pathname === link.href ? "text-[#22C55E]" : "text-slate-500 hover:text-[#22C55E]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-bold text-slate-500 hover:text-slate-900 px-4 py-2 transition-colors">
                        Login
                    </Link>
                    <Link href="/signup" className="bg-[#22C55E] hover:bg-[#1eb054] text-white text-sm font-bold py-2.5 px-6 rounded-xl transition-all active:scale-95 whitespace-nowrap">
                        Sign Up
                    </Link>
                </div>

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
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-bold ${pathname === link.href ? "text-[#22C55E]" : "text-slate-500"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-100 my-2" />
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-bold text-slate-500"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                onClick={() => setIsOpen(false)}
                                className="bg-[#22C55E] text-white text-center font-bold py-4 rounded-2xl shadow-lg shadow-green-500/20"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
