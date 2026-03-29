export default function AuthContainer({ children, noGradient = false }: { children: React.ReactNode, noGradient?: boolean }) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 sm:p-8 relative overflow-hidden">
            {/* Subtle design elements */}
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-primary/5 rounded-full blur-[120px] -mr-24 -mt-24 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-primary/5 rounded-full blur-[120px] -ml-24 -mb-24 pointer-events-none" />

            <div className="w-full max-w-[500px] bg-white rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative z-10 transition-all duration-500">
                {children}
            </div>
            
            <div className="mt-12 flex items-center gap-12 relative z-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 cursor-default">conscious dining</span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 cursor-default">zero waste access</span>
            </div>
        </div>
    );
}
