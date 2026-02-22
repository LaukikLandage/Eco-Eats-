"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ShieldCheck, UserCheck, BarChart3, Download, Search, Check, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminDashboard() {
    const [students, setStudents] = useState([
        { id: "ST991", name: "Rahul Deshmukh", email: "rahul@mitadt.edu.in", status: "pending", date: "Today" },
        { id: "ST992", name: "Snehal R.", email: "snehal@mitadt.edu.in", status: "pending", date: "Yesterday" },
        { id: "ST993", name: "Amit K.", email: "amit@mitadt.edu.in", status: "verified", date: "2 days ago" },
    ]);

    const verifyStudent = (id: string) => {
        setStudents(students.map(s => s.id === id ? { ...s, status: "verified" } : s));
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-8">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                        <ChevronLeft size={20} className="text-slate-600" />
                    </Link>
                    <h1 className="text-xl font-bold font-heading text-slate-800">Admin Panel</h1>
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="card p-4 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total Students</span>
                    <div className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-slate-800">1,248</span>
                    </div>
                </div>
                <div className="card p-4 space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pending Verification</span>
                    <div className="flex items-center gap-2 text-primary">
                        <span className="text-3xl font-bold">12</span>
                        <UserCheck size={20} />
                    </div>
                </div>
            </div>

            <section className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold font-heading text-slate-800">Student Verification</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input className="bg-white border border-slate-100 rounded-lg pl-9 pr-4 py-1.5 text-xs outline-none focus:border-primary" placeholder="Search..." />
                    </div>
                </div>

                <div className="space-y-3">
                    {students.filter(s => s.status === "pending").map((student) => (
                        <motion.div
                            layout
                            key={student.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card p-4 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 font-bold">
                                    {student.name.charAt(0)}
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-slate-800">{student.name}</h5>
                                    <span className="text-[10px] text-slate-400 block">{student.email}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => verifyStudent(student.id)}
                                    className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                >
                                    <Check size={16} />
                                </button>
                                <button className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors">
                                    <X size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-lg font-bold font-heading text-slate-800">Data & Analytics</h3>
                <div className="card space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <BarChart3 size={18} className="text-primary" />
                            <span className="text-sm font-bold text-slate-700">Waste Analytics</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase">This Month</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="btn-secondary w-full py-3 text-sm justify-center">
                            <Download size={16} /> Export Waste Data (CSV)
                        </button>
                        <button className="btn-secondary w-full py-3 text-sm justify-center">
                            <Download size={16} /> Export Rewards History
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
