"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Search, CreditCard, ArrowRightLeft, Send, CheckCircle2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CreditTransferPage() {
    const [amount, setAmount] = useState("");
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const credits = 100;
    const foundStudent = search.length > 2 ? { name: "Demo Student 2", id: "ST002" } : null;

    const handleTransfer = () => {
        setIsSuccess(true);
        setTimeout(() => {
            setShowModal(false);
            setIsSuccess(false);
            setAmount("");
            setSearch("");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 space-y-8">
            <div className="flex items-center gap-4">
                <Link href="/dashboard" className="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                    <ChevronLeft size={20} className="text-slate-600" />
                </Link>
                <h1 className="text-xl font-bold font-heading text-slate-800">Credit Transfer</h1>
            </div>

            <div className="card bg-gradient-to-br from-primary to-primary-dark text-white border-none p-8 flex flex-col items-center gap-2 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <CreditCard size={120} />
                </div>
                <span className="text-white/70 text-sm font-medium">Available Credits</span>
                <span className="text-5xl font-bold">₹{credits.toFixed(2)}</span>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Transfer to Student</label>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            className="input-field pl-12"
                            placeholder="Search by Name or Student ID"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <AnimatePresence>
                        {foundStudent && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-4 bg-primary/5 border border-primary/10 rounded-2xl flex items-center justify-between"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        {foundStudent.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-bold text-slate-800">{foundStudent.name}</h5>
                                        <span className="text-[10px] text-slate-500">{foundStudent.id}</span>
                                    </div>
                                </div>
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                                    <CheckCircle2 size={12} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Amount to Transfer</label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                        <input
                            type="number"
                            className="input-field pl-8 text-xl font-bold"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <p className="text-[10px] text-slate-400 ml-1">Daily limit: ₹500.00</p>
                </div>

                <button
                    disabled={!foundStudent || !amount || parseFloat(amount) > credits}
                    onClick={() => setShowModal(true)}
                    className="btn-primary w-full py-4 text-lg mt-4 disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none"
                >
                    Send Credits <Send size={18} />
                </button>
            </div>

            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => !isSuccess && setShowModal(false)}
                        ></motion.div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="w-full max-w-sm bg-white rounded-[2.5rem] p-8 relative overflow-hidden text-center z-10"
                        >
                            {isSuccess ? (
                                <div className="space-y-6 py-4">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-500">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-slate-800">Transfer Successful!</h3>
                                        <p className="text-slate-500">₹{parseFloat(amount).toFixed(2)} sent to {foundStudent?.name}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-slate-800">Confirm Transfer</h3>
                                        <p className="text-slate-500">Are you sure you want to transfer this amount?</p>
                                    </div>

                                    <div className="bg-slate-50 rounded-[2rem] p-6 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-400">Recipient</span>
                                            <span className="text-sm font-bold text-slate-800">{foundStudent?.name}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-slate-400">Amount</span>
                                            <span className="text-xl font-bold text-primary">₹{parseFloat(amount).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <button onClick={handleTransfer} className="btn-primary w-full py-4">Confirm & Send</button>
                                        <button onClick={() => setShowModal(false)} className="text-slate-400 font-bold text-sm py-2">Cancel</button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
