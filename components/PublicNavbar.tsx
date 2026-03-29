"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Leaf, Menu, X, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PublicNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    
    const isDemoRoute = pathname.startsWith('/demo');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (isDemoRoute) {
        return null;
    }

    const navLinks = [
        { name: "Home", href: "/", type: "page" },
        { name: "About Us", href: "/about", type: "page" },
        { name: "Our Team", href: "/team", type: "page" },
        { name: "Contact", href: "/contact", type: "page" },
        { name: "Problem", href: "/#problem", type: "section" },
        { name: "Solution", href: "/#solution", type: "section" },
        { name: "Features", href: "/#features", type: "section" },
        { name: "How It Works", href: "/#workflow", type: "section" },
        { name: "Impact", href: "/#impact", type: "section" },
    ];

    const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string, href: string, type: string }) => {
        if (link.type === "section") {
            e.preventDefault();
            const id = link.href.substring(2);
            
            if (pathname !== "/") {
                await router.push("/");
                setTimeout(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        const offset = 100;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = element.getBoundingClientRect().top;
                        const elementPosition = elementRect - bodyRect;
                        const offsetPosition = elementPosition - offset;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                }, 100);
            } else {
                const element = document.getElementById(id);
                if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
            }
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
            scrolled || isOpen ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 h-16 shadow-lg shadow-slate-200/20" : "bg-transparent h-24"
        }`}>
            <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between gap-8">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                        <Leaf size={22} className="text-slate-900 fill-slate-900/10" />
                    </div>
                    <span className="text-xl font-black font-heading text-slate-900 tracking-tighter italic hidden xl:block uppercase">EcoEats</span>
                </Link>

                {/* Unified Horizontal Navigation */}
                <div className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        const isSection = link.type === "section";
                        
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link)}
                                className={`whitespace-nowrap px-3 xl:px-4 py-2 rounded-xl text-[10px] xl:text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                                    isActive 
                                    ? "bg-primary text-slate-900 shadow-sm scale-105" 
                                    : isSection 
                                        ? "text-slate-400 hover:text-primary-dark hover:bg-slate-50" 
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions - Inverted Design */}
                <div className="flex items-center gap-3">
                    <Link href="/demo/student" className="hidden sm:flex items-center gap-2 bg-primary text-slate-900 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        <Play size={10} fill="currentColor" />
                        Student Demo
                    </Link>
                    <Link href="/demo/admin" className="hidden sm:flex text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-primary-dark px-4 py-2.5 transition-colors whitespace-nowrap">
                        University Demo
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2.5 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors border border-slate-100/50 shadow-sm"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl border border-slate-100 shadow-2xl rounded-[2.5rem] mt-2 overflow-y-auto max-h-[80vh]"
                    >
                        <div className="p-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        handleNavClick(e, link);
                                        setIsOpen(false);
                                    }}
                                    className={`block w-full text-center py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                                        pathname === link.href ? "bg-primary text-slate-900" : "text-slate-500 hover:bg-slate-50"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-100 my-4" />
                            <div className="flex flex-col gap-3 pt-4">
                                <Link
                                    href="/demo/student"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-5 bg-primary text-slate-900 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform shadow-xl shadow-primary/10"
                                >
                                    <Play size={14} fill="currentColor" />
                                    Student Demo
                                </Link>
                                <Link
                                    href="/demo/admin"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-5 text-slate-900 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center active:scale-95 transition-transform"
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
