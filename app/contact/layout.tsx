import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact EcoEats – Support & University Partnerships',
    description: 'Get in touch with EcoEats for university collaborations, student support, and eco-friendly food initiatives in Pune.',
    keywords: ['EcoEats contact', 'university food waste management', 'Pune startup', 'sustainability'],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
