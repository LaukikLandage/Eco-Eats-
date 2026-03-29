import { Leaf, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <Leaf size={18} className="text-slate-900" />
                            </div>
                            <span className="text-xl font-black font-heading tracking-tighter italic">EcoEats</span>
                        </Link>
                        <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
                            Sustainable campus dining solutions designed to reduce waste and improve the student experience.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <Github size={20} />
                            </a>
                            <a href="mailto:work@laukiklandage.com" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Demo Access</h4>
                        <ul className="space-y-4">
                            <li><Link href="/demo/student-dashboard" className="text-slate-500 hover:text-primary transition-colors">Student Demo</Link></li>
                            <li><Link href="/demo/admin-dashboard" className="text-slate-500 hover:text-primary transition-colors">University Demo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-slate-500 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/team" className="text-slate-500 hover:text-primary transition-colors">Our Team</Link></li>
                            <li><Link href="/contact" className="text-slate-500 hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium">
                        © 2026 EcoEats Initiative. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest italic opacity-60">
                        Designed and developed by <span className="text-slate-900">Team EcoEats</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
