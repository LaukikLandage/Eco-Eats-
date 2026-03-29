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
    const isDemo = pathname.includes('/demo');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pageLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Contact", href: "/contact" },
    ];

    const sectionLinks = [
        { name: "Problem", href: "/#problem" },
        { name: "Solution", href: "/#solution" },
        { name: "Features", href: "/#features" },
        { name: "How It Works", href: "/#workflow" },
        { name: "Impact", href: "/#impact" },
    ];

    const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#")) {
            e.preventDefault();
            const id = href.substring(2);
            
            if (pathname !== "/") {
                await router.push("/");
                // Small delay to ensure page is loaded before scrolling
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
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
            scrolled || isOpen ? "bg-white/90 backdrop-blur-xl border-b border-slate-100 h-16 shadow-lg shadow-slate-100/30" : "bg-transparent h-24"
        }`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                        <Leaf size={22} className="text-slate-900 fill-slate-900/10" />
                    </div>
                    <span className="text-xl font-black font-heading text-slate-900 tracking-tighter italic hidden sm:block">EcoEats</span>
                </Link>

                {/* Navigation Links - Centered & Optimized */}
                {!isDemo && (
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Main Pages */}
                        <div className="flex items-center gap-4 border-r border-slate-100 pr-4">
                            {pageLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-[10px] font-black uppercase tracking-widest transition-all duration-300 px-3 py-1.5 rounded-lg ${
                                        pathname === link.href ? "bg-primary text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        {/* Section Anchors */}
                        <div className="flex items-center gap-4">
                            {sectionLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 hover:text-primary-dark transition-all duration-300 relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                    {!isDemo ? (
                        <>
                            <Link href="/demo/student" className="hidden sm:flex text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 px-4 py-2 transition-colors items-center gap-2 group/demo">
                                <Play size={12} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                                Student Demo
                            </Link>
                            <Link href="/demo/admin" className="btn-primary !py-2.5 !px-6 !text-[10px] !font-black !uppercase !tracking-widest shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                University Demo
                            </Link>
                        </>
                    ) : (
                        <div className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-full flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-primary-dark">Demo Mode Active</span>
                        </div>
                    )}

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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-slate-100 shadow-2xl overflow-y-auto max-h-[80vh]"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {/* Pages */}
                            <div className="grid grid-cols-2 gap-3">
                                {pageLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`p-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-center border transition-all ${
                                            pathname === link.href ? "bg-primary border-primary text-slate-900" : "bg-slate-50 border-slate-100 text-slate-500"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            
                            <div className="h-px bg-slate-100" />
                            
                            {/* Sections */}
                            <div className="space-y-4">
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] ml-2">Quick Scroll</span>
                                <div className="grid grid-cols-1 gap-2">
                                    {sectionLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="px-6 py-4 rounded-2xl bg-white border border-slate-100 text-[11px] font-black uppercase tracking-widest text-slate-600 flex items-center justify-between group"
                                        >
                                            {link.name}
                                            <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="h-px bg-slate-100" />
                            
                            {/* Demo Actions */}
                            <div className="flex flex-col gap-3 pb-4">
                                <Link
                                    href="/demo/student"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                >
                                    <Play size={14} fill="currentColor" className="text-primary" />
                                    Student Demo
                                </Link>
                                <Link
                                    href="/demo/admin"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-5 bg-primary text-slate-900 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest flex items-center justify-center active:scale-95 transition-transform"
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

// Helper icons
function ChevronRight({ size, className }: { size: number, className: string }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="m9 18 6-6-6-6"/>
        </svg>
    );
}
