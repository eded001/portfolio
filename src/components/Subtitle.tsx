import type { ReactNode } from "react";

interface SubtitleProps {
    children: ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
    return (
        <h2 className="text-2xl font-bold text-center text-zinc-500">
            {children}
        </h2>
    );
}