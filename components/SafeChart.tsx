"use client";

import { useEffect, useState, ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

interface SafeChartProps {
    children: ReactNode;
    height?: number | string;
    width?: number | string;
    minHeight?: number;
}

export default function SafeChart({ children, height = "100%", width = "100%", minHeight = 300 }: SafeChartProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div style={{ width: "100%", height: height === "100%" ? minHeight : height }}>
            <ResponsiveContainer width="100%" height="100%">
                {children as any}
            </ResponsiveContainer>
        </div>
    );
}
