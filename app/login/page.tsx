"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Mail, Lock, Eye, EyeOff, Building2, UserCircle, GraduationCap } from "lucide-react";
import Link from "next/link";
import AuthContainer from "@/components/AuthContainer";

function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const message = searchParams.get("message");
    const [view, setView] = useState<"portal" | "form">("portal");
    const [loginType, setLoginType] = useState<"student" | "faculty" | "tcs">("student");
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
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Login failed");

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const openForm = (type: "student" | "faculty" | "tcs") => {
        setLoginType(type);
        setView("form");
    };

    return (
        <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
                {view === "portal" ? (
                    <motion.div
                        key="portal"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex flex-col items-center text-center space-y-8"
                    >
                        <div className="space-y-2">
                            <h1 className="text-3xl font-black text-slate-800 leading-tight">
                                Welcome to MIT-ADT Login Portal
                            </h1>
                        </div>

                        <div className="w-full space-y-4 pt-4">
                            <button
                                onClick={() => openForm("tcs")}
                                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-5 px-8 rounded-2xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <Building2 size={24} />
                                TcS IoN Login
                            </button>

                            <div className="text-slate-400 font-bold text-xs uppercase tracking-widest py-2">
                                Examination Department Login Portal
                            </div>

                            <button
                                onClick={() => openForm("faculty")}
                                className="w-full bg-[#059669] hover:bg-[#047857] text-white font-bold py-5 px-8 rounded-2xl shadow-lg shadow-emerald-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <UserCircle size={24} />
                                Faculty/College Login
                            </button>

                            <button
                                onClick={() => openForm("student")}
                                className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-5 px-8 rounded-2xl shadow-lg shadow-purple-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <GraduationCap size={24} />
                                Student Login
                            </button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                    >
                        <div>
                            <button
                                onClick={() => setView("portal")}
                                className="inline-flex items-center text-slate-400 hover:text-slate-600 transition-colors mb-6 group"
                            >
                                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-bold ml-1">Back to Portal</span>
                            </button>
                            <h2 className="text-2xl font-black text-slate-900 capitalize leading-none">
                                {loginType} Login
                            </h2>
                            <p className="text-slate-400 text-sm font-medium mt-3">
                                {loginType === "student" ? "Access your student dashboard" : "University staff management portal"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email or Username</label>
                                <div className="relative">
                                    <input
                                        name="email"
                                        type="text"
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                        placeholder={loginType === "faculty" ? "admin" : "demo@mitadt.edu.in"}
                                    />
                                    <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Password</label>
                                <div className="relative">
                                    <input
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        required
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium"
                                        placeholder="********"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-400"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-red-500 text-xs font-bold text-center bg-red-50 p-3 rounded-xl border border-red-100"
                                >
                                    {error}
                                </motion.p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary-dark text-white font-black py-5 px-8 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] disabled:opacity-70"
                            >
                                {loading ? "Authenticating..." : "Login to Dashboard"}
                            </button>
                        </form>

                        <div className="text-center pt-4">
                            <p className="text-slate-400 text-xs font-bold">
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-primary hover:text-primary-dark transition-colors">Apply Now</Link>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function LoginPage() {
    return (
        <AuthContainer>
            <Suspense fallback={<div>Loading...</div>}>
                <LoginContent />
            </Suspense>
        </AuthContainer>
    );
}
