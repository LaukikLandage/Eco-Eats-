"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Building2,
    GraduationCap,
    Leaf,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import AuthContainer from "@/components/AuthContainer";

function LoginContent() {
    const router = useRouter();
    const [view, setView] = useState<"portal" | "form">("portal");
    const [loginType, setLoginType] = useState<"university" | "student">("student");
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
            const email = data.email as string;
            const password = data.password as string;

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, type: loginType }),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Login failed");
            }

            // Successfully logged in
            // Redirect based on user role returned from backend
            // But we also respect the loginType selected on frontend for consistency
            const userRole = result.user?.role;
            const redirectPath = userRole === "admin" ? "/admin" : "/dashboard";

            router.push(redirectPath);
            router.refresh(); // Refresh to update middleware state
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const openForm = (type: "university" | "student") => {
        setLoginType(type);
        setView("form");
        setError("");
    };

    return (
        <div className="flex flex-col min-h-full">
            {/* Header / Logo */}
            <div className="pt-10 pb-4 flex flex-col items-center px-6 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-14 h-14 bg-[#22C55E] rounded-[1.25rem] flex items-center justify-center shadow-xl shadow-green-500/10 mb-5"
                >
                    <Leaf size={28} className="text-white fill-white/10" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight"
                >
                    Login to EcoEats
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-slate-500 text-sm sm:text-base font-medium mt-1.5"
                >
                    Welcome back to our community
                </motion.p>
            </div>

            <div className="p-6 sm:p-8 pt-2">
                <AnimatePresence mode="wait">
                    {view === "portal" ? (
                        <motion.div
                            key="portal"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-4"
                        >
                            <button
                                onClick={() => openForm("university")}
                                className="group w-full p-5 sm:p-6 bg-white border-2 border-slate-50 hover:border-green-500 rounded-3xl transition-all duration-300 flex items-center gap-4 sm:gap-6 text-left active:scale-[0.98] shadow-sm hover:shadow-xl hover:shadow-green-500/10"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-50 group-hover:bg-green-500 rounded-2xl flex items-center justify-center transition-colors">
                                    <Building2 size={24} className="text-green-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">University Login</h3>
                                    <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">Campus administrators</p>
                                </div>
                                <ArrowRight className="text-slate-200 group-hover:text-green-500 group-hover:translate-x-1 transition-all" size={18} />
                            </button>

                            <button
                                onClick={() => openForm("student")}
                                className="group w-full p-5 sm:p-6 bg-white border-2 border-slate-50 hover:border-green-500 rounded-3xl transition-all duration-300 flex items-center gap-4 sm:gap-6 text-left active:scale-[0.98] shadow-sm hover:shadow-xl hover:shadow-green-500/10"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 group-hover:bg-green-500 rounded-2xl flex items-center justify-center transition-colors">
                                    <GraduationCap size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight">Student Login</h3>
                                    <p className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5">University students</p>
                                </div>
                                <ArrowRight className="text-slate-200 group-hover:text-green-500 group-hover:translate-x-1 transition-all" size={18} />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="space-y-6"
                        >
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setView("portal")}
                                    className="flex items-center text-slate-400 hover:text-slate-900 font-bold text-xs sm:text-sm transition-colors group"
                                >
                                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    Back
                                </button>
                                <div className="flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full border border-green-100">
                                    {loginType === "university" ? <Building2 size={10} className="text-green-600" /> : <GraduationCap size={10} className="text-green-600" />}
                                    <span className="text-[9px] font-black uppercase tracking-wider text-green-700">{loginType} portal</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">
                                        {loginType === "university" ? "University Email" : "Student Email"}
                                    </label>
                                    <div className="relative group">
                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors" size={18} />
                                        <input
                                            name="email"
                                            type="text"
                                            required
                                            className="w-full pl-12 pr-6 py-3.5 sm:py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium text-sm sm:text-base"
                                            placeholder={loginType === "university" ? "Admin ID or Email" : "Student ID or Email"}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] ml-1">Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-green-500 transition-colors" size={18} />
                                        <input
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            className="w-full pl-12 pr-14 py-3.5 sm:py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-green-500 focus:ring-4 focus:ring-green-500/5 outline-none transition-all font-medium text-sm sm:text-base"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-green-600 transition-colors p-1"
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {error && (
                                    <motion.p
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-red-500 text-xs font-bold text-center bg-red-50/50 p-3 rounded-xl border border-red-100"
                                    >
                                        {error}
                                    </motion.p>
                                )}

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#22C55E] hover:bg-[#1eb054] text-white font-black py-4 rounded-2xl shadow-xl shadow-green-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                                    >
                                        {loading ? "Verifying..." : "Login to Account"}
                                    </button>
                                </div>
                            </form>

                            <div className="text-center pt-1 pb-2">
                                {loginType === "university" ? (
                                    <Link href="/forgot-password" title="Reset Password" className="text-slate-400 hover:text-green-600 font-bold text-[11px] sm:text-xs transition-colors">
                                        Forgot Password?
                                    </Link>
                                ) : (
                                    <p className="text-slate-400 text-[11px] sm:text-xs font-bold">
                                        Not registered yet?{" "}
                                        <Link href="/signup" className="text-green-600 hover:text-green-700 transition-colors">Sign Up</Link>
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="pb-8 pt-2 flex justify-center mt-auto">
                <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.2em]">Powered by EcoEats Hub</p>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <AuthContainer gradientClassName="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
            <Suspense fallback={
                <div className="p-20 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
                    <p className="text-slate-400 font-bold animate-pulse">Loading EcoEats...</p>
                </div>
            }>
                <LoginContent />
            </Suspense>
        </AuthContainer>
    );
}
