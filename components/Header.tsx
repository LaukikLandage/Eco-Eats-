"use client";

import { Leaf, User } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-50">
            <Link href="/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Leaf size={18} className="text-white fill-white/20" />
                </div>
                <span className="text-xl font-bold font-heading text-slate-800">
                    Eco<span className="text-primary">Eats</span>
                </span>
            </Link>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                        alt="User Profile"
                        className="w-full h-full rounded-full bg-slate-100"
                    />
                </div>
            </div>
        </header>
    );
}
