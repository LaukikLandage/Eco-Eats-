export default function AuthContainer({ children, noGradient = false }: { children: React.ReactNode, noGradient?: boolean }) {
    return (
        <div className={`min-h-screen ${noGradient ? 'bg-[#F5F7F8]' : 'bg-gradient-to-br from-[#8E44AD] to-[#3498DB]'} flex flex-col items-center justify-center p-4`}>
            <div className="w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/20 backdrop-blur-sm rounded-b-3xl z-10 hidden md:block"></div>
                {children}
            </div>

            {!noGradient && (
                <p className="mt-8 text-white/60 font-black text-[11px] uppercase tracking-[0.3em]">
                    MIT Art, Design & Technology University
                </p>
            )}
        </div>
    );
}
