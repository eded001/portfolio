import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

// Components
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Anchor from "@/components/Anchor";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { useEffect, useState } from "react";

export default function Header() {
    const sections = [
        { name: "About", href: "#about" },
        { name: "Expertises", href: "#expertise" },
        { name: "Stacks", href: "#stacks" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const items = [
        {
            icon: <SiInstagram />,
            color: "bg-pink-200 text-pink-600 hover:bg-pink-300 hover:text-pink-700",
            link: "https://instagram.com/eded.dev"
        },
        {
            icon: <SiLinkedin />,
            color: "bg-blue-200 text-blue-600 hover:bg-blue-300 hover:text-blue-700",
            link: "https://www.linkedin.com/in/edgar-augusto/"
        },
        {
            icon: <SiGithub />,
            color: "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 hover:text-black",
            link: "https://github.com/eded.dev"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % items.length);
        }, 5000);
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { icon, color, link } = items[current];

    return (
        <div className="top-0 fixed flex justify-between min-h-[10dvh] w-full px-10 py-5 backdrop-blur-md backdrop-invert-5 backdrop-grayscale-30 z-20">
            <a href="#home" className="flex space-x-1 items-center text-2xl">
                <Logo />
                <p className="text-zinc-800">Edgar Augusto</p>
            </a>

            <nav className="flex space-x-5 items-center">
                <ul className="flex space-x-2">
                    {sections.map(section => (
                        <li key={section.name} className="text-zinc-700 hover:text-zinc-500">
                            <Anchor href={section.href} target="_self">
                                {section.name}
                            </Anchor>
                        </li>
                    ))}
                </ul>

                <a className={`${color} transition-all duration-500 p-2 rounded-sm`} href={link} target="_blank" rel="noopener noreferrer">
                    <LayoutTextFlip key={current} text="" words={[icon]} />
                </a>
            </nav>
        </div>
    );
}