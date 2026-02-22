import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'EcoEats Login – University & Student Access',
    description: 'Secure login for EcoEats University and Student users.',
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
