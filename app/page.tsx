"use client";

import { motion } from "framer-motion";
import { Leaf, ArrowRight, ShieldCheck, Zap, Heart, Globe, BarChart3, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="bg-[#F5F7F8] overflow-x-hidden pt-20">
      <main>
        {/* Hero Section */}
        <section className="relative px-6 pt-20 pb-32 max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8"
          >
            <Zap size={16} className="text-primary" />
            <span className="text-[11px] font-black uppercase tracking-widest text-primary">Joining 10,000+ Students</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 max-w-4xl"
          >
            Smarter Dining for a <span className="text-primary">Sustainable</span> Campus.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            The all-in-one platform for students to reduce food waste, earn rewards, and contribute to a greener university community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link href="/signup" className="btn-primary !px-10 !py-5 text-lg group">
              Join the Movement
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/login" className="btn-secondary !px-10 !py-5 text-lg">
              Login as University
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
        </section>

        {/* Features Preview */}
        <section id="features" className="bg-white py-32 rounded-[3.5rem] shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black text-slate-900 mb-4">Everything you need</h2>
              <p className="text-slate-400 font-medium">Tools designed to make sustainable eating easy and rewarding.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Waste Tracking",
                  desc: "Visualize your impact and the collective waste reduction of your entire campus.",
                  color: "bg-blue-50 text-blue-500"
                },
                {
                  icon: Users,
                  title: "Credit Transfer",
                  desc: "Forgot to use your meal? Transfer it to a peer and prevent it from going to waste.",
                  color: "bg-purple-50 text-purple-500"
                },
                {
                  icon: Heart,
                  title: "Impact Rewards",
                  desc: "Convert your sustainability points into gift vouchers and eco-friendly products.",
                  color: "bg-primary/10 text-primary"
                }
              ].map((feature, i) => (
                <div key={i} className="card group hover:scale-[1.02] transition-transform cursor-default bg-white border border-slate-100 p-8 rounded-3xl shadow-xl shadow-slate-200/50">
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-black text-slate-900">Get in Touch</h2>
            <p className="text-slate-400 font-medium leading-relaxed">Have questions about bringing EcoEats to your department or university? We're here to help.</p>
            <div className="bg-white p-2 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-2">
              <input type="email" placeholder="Your email address" className="flex-1 bg-transparent px-6 py-4 outline-none font-medium" />
              <button className="bg-primary text-white font-bold h-14 px-8 rounded-xl active:scale-95 transition-all">Send</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-32 bg-primary flex flex-col items-center text-center text-white relative overflow-hidden m-6 rounded-[3rem]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Ready to make an impact?</h2>
          <p className="text-white/80 font-bold mb-10 max-w-xl relative z-10 leading-relaxed uppercase tracking-widest text-xs">
            Start your sustainable dining journey today. Available at all MIT-ADT University mess counters.
          </p>
          <Link href="/signup" className="bg-white text-primary font-black px-12 py-5 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all relative z-10">
            Create Free Account
          </Link>
        </section>
      </main>
    </div>
  );
}
