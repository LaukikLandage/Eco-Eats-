"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, Camera, User, School, Hash, BookOpen, Mail, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
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
        <AuthContainer>
            <div className="min-h-screen bg-white p-8 flex flex-col">
                <div className="mb-6">
                    <Link href="/" className="inline-flex items-center text-slate-400 hover:text-slate-600 transition-colors mb-4">
                        <ChevronLeft size={20} />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                    <h1 className="text-2xl font-bold font-heading text-slate-900 mb-2">Create Account</h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex-1 space-y-6 pb-10"
                >
                    <div className="flex flex-col items-center justify-center gap-2 py-2">
                        <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 relative group cursor-pointer overflow-hidden">
                            <Camera size={24} className="text-slate-300 group-hover:text-primary transition-colors" />
                            <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Profile Photo</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="form-label">Your Name</label>
                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    name="firstName"
                                    required
                                    className="input-field"
                                    placeholder="First Name"
                                />
                                <input
                                    name="lastName"
                                    required
                                    className="input-field"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="form-label">Email Address</label>
                            <div className="relative">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="input-field pr-12"
                                    placeholder="example@mitadt.edu.in"
                                />
                                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="form-label">University ID</label>
                            <div className="relative">
                                <input
                                    name="studentId"
                                    required
                                    className="input-field pr-12"
                                    placeholder="2023-12345"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-primary">
                                    <span className="text-[10px] font-bold">Valid</span>
                                    <CheckCircle2 size={14} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <label className="form-label">University</label>
                                <select
                                    name="university"
                                    required
                                    className="input-field appearance-none"
                                >
                                    <option value="MIT-ADT University, Pune">MIT-ADT</option>
                                </select>
                            </div>
                            <div className="space-y-1.5">
                                <label className="form-label">Class</label>
                                <input
                                    name="class"
                                    required
                                    className="input-field"
                                    placeholder="CS-201"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="form-label">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="input-field pr-12"
                                    placeholder="********"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-400"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="form-label">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                required
                                className="input-field"
                                placeholder="********"
                            />
                        </div>

                        <div className="flex items-center gap-2 py-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input type="checkbox" required className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" />
                                <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900 transition-colors">Agree with Term & Conditions</span>
                            </label>
                        </div>

                        {error && <p className="text-red-500 text-xs font-medium text-center">{error}</p>}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary w-full mt-4"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                    </form>

                    <p className="text-center text-slate-400 text-xs py-4 font-bold">
                        Already have an account?{" "}
                        <Link href="/login" className="text-slate-900 font-bold hover:text-primary transition-colors">Login to Account</Link>
                    </p>
                </motion.div>
            </div>
        </AuthContainer>
    );
}
