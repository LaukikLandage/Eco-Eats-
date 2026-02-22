"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, Camera, User, School, Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import AuthContainer from "@/components/AuthContainer";

export default function SignupPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Signup failed");

            router.push("/login?message=Signup successful! Please login.");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContainer gradientClassName="bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
            <div className="p-6 sm:p-10 flex flex-col">
                <div className="mb-6">
                    <Link href="/login" className="inline-flex items-center text-slate-400 hover:text-slate-900 transition-colors mb-4 group font-bold text-xs">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Login</span>
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-black font-heading text-slate-900 tracking-tight">Create Account</h1>
                    <p className="text-slate-500 text-sm font-medium mt-1">Join the EcoEats community today</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 pb-4"
                >
                    <div className="flex flex-col items-center justify-center gap-3 py-2">
                        <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 relative group cursor-pointer overflow-hidden transition-colors hover:border-green-500/50">
                            <Camera size={24} className="text-slate-300 group-hover:text-green-500 transition-colors" />
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Upload Photo</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    name="firstName"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 outline-none transition-all font-medium text-sm"
                                    placeholder="First"
                                />
                                <input
                                    name="lastName"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 outline-none transition-all font-medium text-sm"
                                    placeholder="Last"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors" size={18} />
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-6 py-3.5 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 outline-none transition-all font-medium text-sm"
                                    placeholder="example@mitadt.edu.in"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Student ID</label>
                                <div className="relative group">
                                    <input
                                        name="studentId"
                                        required
                                        className="w-full px-5 py-3.5 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 outline-none transition-all font-medium text-sm"
                                        placeholder="20230001"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Class/Div</label>
                                <input
                                    name="class"
                                    required
                                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 outline-none transition-all font-medium text-sm"
                                    placeholder="CS-A"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors" size={18} />
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full pl-12 pr-14 py-3.5 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 outline-none transition-all font-medium text-sm"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-green-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" required className="w-4 h-4 rounded border-slate-300 text-green-600 focus:ring-green-500" />
                                <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-900 transition-colors">I agree to the Terms & Privacy Policy</span>
                            </label>
                        </div>

                        {error && <p className="text-red-500 text-xs font-bold text-center bg-red-50 p-3 rounded-xl">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#22C55E] hover:bg-[#1eb054] text-white font-black py-4 rounded-2xl shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] disabled:opacity-70 mt-2"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    <p className="text-center text-slate-400 text-xs font-bold pt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="text-green-600 hover:text-green-700 transition-colors">Log In</Link>
                    </p>
                </motion.div>
            </div>
            <div className="pb-8 flex justify-center mt-auto">
                <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.2em]">EcoEats Sustainability Network</p>
            </div>
        </AuthContainer>
    );
}
