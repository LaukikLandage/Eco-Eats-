"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isDemo = pathname.includes('/demo');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Problem", href: "/#problem" },
        { name: "Solution", href: "/#solution" },
        { name: "Features", href: "/#features" },
        { name: "How It Works", href: "/#workflow" },
        { name: "Impact", href: "/#impact" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (pathname === "/" && href.startsWith("/#")) {
            e.preventDefault();
            const id = href.substring(2);
            const element = document.getElementById(id);
            if (element) {
                const offset = 100; // Account for navbar height
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            scrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 h-16 shadow-lg shadow-slate-100/50" : "bg-transparent h-24"
        }`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                        <Leaf size={22} className="text-slate-900 fill-slate-900/10" />
                    </div>
                    <span className="text-2xl font-black font-heading text-slate-900 tracking-tighter italic">EcoEats</span>
                </Link>

                {/* Center Navigation Links */}
                {!isDemo && (
                    <div className="hidden lg:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary-dark transition-all duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                )}

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center gap-4">
                    {!isDemo ? (
                        <>
                            <Link href="/demo/student" className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 px-4 py-2 transition-colors flex items-center gap-2">
                                <Play size={14} fill="currentColor" />
                                Student Demo
                            </Link>
                            <Link href="/demo/admin" className="btn-primary !py-2 !px-8 !text-[11px] !font-black !uppercase !tracking-widest shadow-xl shadow-primary/20">
                                University Demo
                            </Link>
                        </>
                    ) : (
                        <div className="bg-primary/10 border border-primary/20 px-5 py-2.5 rounded-full flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_8px_rgba(143,236,120,0.8)]" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dark">Live Solution Demo</span>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-3 text-slate-600 hover:bg-slate-50 rounded-2xl transition-colors shadow-sm"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[150] lg:hidden bg-white/95 backdrop-blur-2xl"
                    >
                        <div className="flex flex-col h-full p-10 pt-32 gap-8 relative">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-10 right-6 p-3 bg-slate-50 rounded-2xl text-slate-400"
                            >
                                <X size={32} />
                            </button>

                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        scrollToSection(e, link.href);
                                        setIsOpen(false);
                                    }}
                                    className="text-4xl font-black italic text-slate-900 uppercase tracking-tighter hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            
                            <div className="h-px bg-slate-100 my-6" />
                            
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/demo/student"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-6 bg-slate-50 rounded-[2rem] text-[12px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-center gap-3"
                                >
                                    <Play size={18} fill="currentColor" />
                                    Student Demo
                                </Link>
                                <Link
                                    href="/demo/admin"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-6 bg-primary text-slate-900 rounded-[2rem] text-[12px] font-black uppercase tracking-widest flex items-center justify-center"
                                >
                                    University Demo
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
