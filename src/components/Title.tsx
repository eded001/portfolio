import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Title({ children }: Props) {
    return (
        <h1 className="text-4xl font-bold text-center text-zinc-900">
            {children}
        </h1>
    );
}