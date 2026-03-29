"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    MessageSquare,
    User,
    ChevronDown,
    Leaf,
    Instagram,
    Linkedin,
    Twitter,
    ExternalLink,
    CheckCircle2,
    Send
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        // Simulate form submission
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            (e.target as HTMLFormElement).reset();
        }, 1500);
    }

    return (
        <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-32">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-24">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-xl shadow-primary/20 mx-auto mb-8"
                >
                    <Leaf size={24} className="text-slate-900 fill-slate-900/10" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter italic"
                >
                    Let's talk <span className="text-primary tracking-tight">EcoEats.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 text-xl max-w-2xl mx-auto mt-6 font-medium leading-relaxed"
                >
                    Have questions about bringing EcoEats to your campus? Our team is ready to help you transform your dining experience.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-slate-900/20">
                    {/* Left: Benefits & Info */}
                    <div className="lg:w-1/2 p-12 lg:p-24 text-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-primary/20 duration-700" />
                        
                        <div className="relative z-10 space-y-12">
                            <div>
                                <h2 className="text-4xl font-black mb-8 leading-tight tracking-tight">How we support <br /> our partners.</h2>
                                <div className="space-y-6">
                                    {[
                                        "Phase-wise campus implementation",
                                        "Real-time waste analytics & reporting",
                                        "Automated student reward distribution",
                                        "Kitchen efficiency consultation",
                                        "Behavioral design workshops for staff"
                                    ].map((benefit, i) => (
                                        <motion.div 
                                          key={i} 
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: i * 0.1 + 0.5 }}
                                          className="flex items-center gap-4 group/item"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover/item:bg-primary/40 transition-colors">
                                                <CheckCircle2 size={16} className="text-primary" />
                                            </div>
                                            <span className="text-slate-300 font-medium text-lg italic group-hover/item:text-white transition-colors">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-12 border-t border-white/10 space-y-8">
                                <div className="flex flex-col sm:flex-row gap-8">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Email us</span>
                                        <a href="mailto:work@laukiklandage.com" className="text-lg font-bold text-primary-light hover:text-white transition-colors">work@laukiklandage.com</a>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Call us</span>
                                        <span className="text-lg font-bold text-primary-light">+91 XXXXX XXXXX</span>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                     <SocialButton icon={<Instagram size={20} />} href="#" label="Instagram" dark />
                                     <SocialButton icon={<Linkedin size={20} />} href="#" label="LinkedIn" dark />
                                     <SocialButton icon={<Twitter size={20} />} href="#" label="Twitter" dark />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Modern Form UI */}
                    <div className="lg:w-1/2 p-12 lg:p-24 bg-white relative">
                        <AnimatePresence mode="wait">
                            {!success ? (
                                <motion.form 
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    onSubmit={handleSubmit} 
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input
                                                name="name"
                                                required
                                                className="input-field !rounded-2xl !bg-slate-50 !border-none focus:!bg-white focus:!ring-primary/20 py-4"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                className="input-field !rounded-2xl !bg-slate-50 !border-none focus:!bg-white focus:!ring-primary/20 py-4"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">University / Organization</label>
                                        <input
                                            name="org"
                                            required
                                            className="input-field !rounded-2xl !bg-slate-50 !border-none focus:!bg-white focus:!ring-primary/20 py-4"
                                            placeholder="MIT-ADT University"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                                        <div className="relative">
                                            <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={18} />
                                            <select
                                                name="subject"
                                                required
                                                className="w-full pl-6 pr-12 py-4 rounded-2xl bg-slate-50 focus:bg-white focus:ring-4 focus:ring-primary/20 outline-none transition-all font-medium appearance-none"
                                            >
                                                <option value="">Select an option</option>
                                                <option value="Partnership">Campus Partnership</option>
                                                <option value="Demo">Request a Demo</option>
                                                <option value="Support">Support Inquiry</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            rows={4}
                                            className="input-field !rounded-3xl !bg-slate-50 !border-none focus:!bg-white focus:!ring-primary/20 py-4 resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full !py-5 !text-lg !rounded-3xl font-black group shadow-2xl shadow-primary/30"
                                    >
                                        {loading ? (
                                            <div className="w-6 h-6 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                <span>Send Inquiry</span>
                                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-primary rounded-[2.5rem] flex items-center justify-center text-slate-900 mb-8 shadow-2xl shadow-primary/40">
                                        <CheckCircle2 size={48} className="animate-[bounce_2s_infinite]" />
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 mb-4 italic tracking-tight">Greatness is on its way.</h3>
                                    <p className="text-slate-500 font-medium text-lg mb-10">We've received your request. A campus strategy expert will get back to you within 24 hours.</p>
                                    <button 
                                      onClick={() => setSuccess(false)}
                                      className="text-primary-dark font-black uppercase tracking-widest text-xs hover:scale-110 transition-transform"
                                    >
                                      Send another message
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Subtle Map / Location section */}
            <div className="max-w-7xl mx-auto px-6 mt-32">
                <div className="bg-white rounded-[4rem] p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="max-w-md">
                      <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4 block">Our Hub</span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Founded & built in the heart of MIT-ADT.</h3>
                      <p className="text-slate-500 mt-4 font-medium">Loni Kalbhor, Pune, Maharashtra 412201</p>
                      <Link 
                        href="https://share.google/Iv21l7mamfjHD08lb" 
                        target="_blank"
                        className="inline-flex items-center gap-2 text-primary-dark font-bold mt-8 hover:gap-4 transition-all"
                      >
                         View on Maps <ExternalLink size={18} />
                      </Link>
                   </div>
                   <div className="w-full md:w-1/2 h-64 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 shadow-xl shadow-slate-200/50">
                       <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4420163351!2d74.019!3d18.491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eab9c8699313%3A0x64cf23057e93475c!2sMIT%20Art%2C%20Design%20and%20Technology%20University!5e0!3m2!1sen!2sin!4v1711713000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                   </div>
                </div>
            </div>
        </div>
    );
}

function SocialButton({ icon, href, label, dark = false }: { icon: React.ReactNode, href: string, label: string, dark?: boolean }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                dark 
                ? "bg-white/5 border border-white/10 text-slate-400 hover:bg-primary hover:text-slate-900 border-none" 
                : "bg-white border border-slate-100 text-slate-400 hover:text-primary hover:border-primary shadow-sm"
            }`}
        >
            {icon}
        </Link>
    );
}
