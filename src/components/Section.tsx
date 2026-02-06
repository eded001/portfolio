import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    height?: number;
}

export default function Section({ children, id, height = 100 }: SectionProps) {
    return (
        <section
            id={id}
            className="min-h-screen flex justify-center items-center"
            style={{ minHeight: height + "vh"}}
        >
            {children}
        </section>
    );
}