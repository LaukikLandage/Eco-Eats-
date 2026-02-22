export default function AuthContainer({ children, noGradient = false, gradientClassName }: { children: React.ReactNode, noGradient?: boolean, gradientClassName?: string }) {
    const bgClass = noGradient ? 'bg-[#F5F7F8]' : (gradientClassName || 'bg-gradient-to-br from-[#8E44AD] to-[#3498DB]');

    return (
        <div className={`min-h-[100dvh] ${bgClass} flex flex-col items-center justify-center p-6 sm:p-8 pt-24 sm:pt-32 transition-colors duration-500`}>
            <div className="w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(34,197,94,0.12)] border border-white/20 overflow-hidden relative">
                {children}
            </div>
        </div>
    );
}
