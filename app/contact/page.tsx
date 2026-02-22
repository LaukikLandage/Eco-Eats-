"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    User,
    ChevronDown,
    Leaf,
    Instagram,
    Linkedin,
    Twitter,
    ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Submission failed");

            setSuccess("Thank you! Our team will contact you soon.");
            (e.target as HTMLFormElement).reset();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-[#22C55E] rounded-2xl flex items-center justify-center shadow-xl shadow-green-500/20 mx-auto mb-6"
                >
                    <Leaf size={32} className="text-white fill-white/20" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight"
                >
                    Get in Touch with <span className="text-[#22C55E]">EcoEats</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 text-lg max-w-2xl mx-auto mt-4 font-medium"
                >
                    Have questions, suggestions, or partnership inquiries? We'd love to hear from you.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white rounded-[2.5rem] p-8 sm:p-12 shadow-[0_30px_100px_rgba(34,197,94,0.08)] border border-slate-50"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                <div className="relative group">
                                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#22C55E] transition-colors" size={18} />
                                    <input
                                        name="name"
                                        required
                                        className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-[#22C55E] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#22C55E] transition-colors" size={18} />
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-[#22C55E] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number (Optional)</label>
                                <div className="relative group">
                                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#22C55E] transition-colors" size={18} />
                                    <input
                                        name="phone"
                                        type="tel"
                                        className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-[#22C55E] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                <div className="relative group">
                                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={18} />
                                    <select
                                        name="subject"
                                        required
                                        className="w-full pl-6 pr-12 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-[#22C55E] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium appearance-none"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="General Inquiry">General Inquiry</option>
                                        <option value="University Partnership">University Partnership</option>
                                        <option value="Support">Support</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                            <div className="relative group">
                                <MessageSquare className="absolute left-5 top-5 text-slate-300 group-focus-within:text-[#22C55E] transition-colors" size={18} />
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full pl-12 pr-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-[#22C55E] focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                        </div>

                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-50 text-red-500 p-4 rounded-2xl text-sm font-bold border border-red-100 flex items-center gap-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                {error}
                            </motion.div>
                        )}

                        {success && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 text-[#22C55E] p-4 rounded-2xl text-sm font-bold border border-green-100 flex items-center gap-3"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-bounce" />
                                {success}
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#22C55E] hover:bg-[#1eb054] text-white font-black py-5 rounded-2xl shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Send size={18} />
                                    <span>Send Message</span>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>

                {/* Info Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-8"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        <ContactInfoCard
                            icon={<Mail className="text-[#22C55E]" size={24} />}
                            title="Email Us"
                            detail="support@ecoeats.com"
                            link="mailto:support@ecoeats.com"
                        />
                        <ContactInfoCard
                            icon={<Phone className="text-blue-500" size={24} />}
                            title="Call Us"
                            detail="+91 XXXXX XXXXX"
                            link="tel:+910000000000"
                        />
                        <ContactInfoCard
                            icon={<MapPin className="text-orange-500" size={24} />}
                            title="Visit Us"
                            detail="Pune, Maharashtra, India"
                            link="https://maps.google.com/?q=Pune,Maharashtra,India"
                        />
                    </div>

                    {/* Google Map Mockup */}
                    <div className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-50 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0436040337!2d73.78056545763943!3d18.52487061298885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67414509%3A0x590d11719a46993a!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-[1.8rem]"
                        ></iframe>
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-black text-slate-900">Pune Headquarters</h4>
                                <p className="text-xs font-bold text-slate-400">Maharashtra, India</p>
                            </div>
                            <Link
                                href="https://maps.google.com/?q=Pune,Maharashtra,India"
                                target="_blank"
                                className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#22C55E] hover:bg-green-50 transition-all"
                            >
                                <ExternalLink size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Social Section */}
                    <div className="flex items-center gap-4">
                        <SocialButton icon={<Instagram size={20} />} href="#" label="Instagram" />
                        <SocialButton icon={<Linkedin size={20} />} href="#" label="LinkedIn" />
                        <SocialButton icon={<Twitter size={20} />} href="#" label="Twitter" />
                        <div className="h-px bg-slate-200 flex-1 ml-4" />
                        <Link href="/faq" className="text-xs font-black text-slate-400 hover:text-[#22C55E] transition-colors uppercase tracking-widest">FAQ Section</Link>
                    </div>
                </motion.div>
            </div>

            {/* Background Illustration Decor */}
            <div className="fixed bottom-0 left-0 -z-10 opacity-[0.03] select-none pointer-events-none">
                <Leaf size={400} className="text-[#22C55E] rotate-45 -translate-x-1/2 translate-y-1/2" />
            </div>
        </div>
    );
}

function ContactInfoCard({ icon, title, detail, link }: { icon: React.ReactNode, title: string, detail: string, link: string }) {
    return (
        <Link
            href={link}
            target="_blank"
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-50 flex items-center gap-5 group transition-all hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1"
        >
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <div>
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">{title}</h3>
                <p className="text-slate-900 font-bold mt-0.5">{detail}</p>
            </div>
        </Link>
    );
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-50 flex items-center justify-center text-slate-400 hover:text-[#22C55E] hover:border-[#22C55E]/20 hover:shadow-xl hover:shadow-green-500/5 transition-all"
        >
            {icon}
        </Link>
    );
}
