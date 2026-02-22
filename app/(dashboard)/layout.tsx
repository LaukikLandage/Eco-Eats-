export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="pt-20"> {/* Offset for the fixed AppNavbar */}
            <main className="max-w-7xl mx-auto px-6 py-12 min-h-[80vh]">
                {children}
            </main>
        </div>
    );
}
