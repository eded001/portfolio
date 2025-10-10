import React from "react";

const GradientBackground = ({ duration = 8 }) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-[100dvh] bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 animate-gradient45 z-[-1]"
            style={{
                animationDuration: `${duration}s`,
                backgroundAttachment: "fixed",
                backgroundSize: "200% 200%",
            }}
        />
    );
};

export default GradientBackground;