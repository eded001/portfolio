import { SiLinkedin } from "react-icons/si";

// Components
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Anchor from "@/components/Anchor";

export default function Header() {
    const sections = [
        { name: "About", href: "#about" },
        { name: "Expertise", href: "#expertise" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <div className="top-0 fixed flex justify-between min-h-[10dvh] w-full px-10 py-5 backdrop-blur-sm backdrop-grayscale-25 z-20">
            <div className="flex space-x-1 items-center select-none text-2xl">
                <Logo />
                <p>Edgar Augusto</p>
            </div>

            <nav className="flex space-x-5 items-center">
                <ul className="flex space-x-2">
                    {sections.map(section => (
                        <li key={section.name} className="hover:text-gray-600">
                            <Anchor href={section.href} target="_self">
                                {section.name}
                            </Anchor>
                        </li>
                    ))}
                </ul>

                <Anchor href="https://www.linkedin.com/in/edgar-augusto/">
                    <Button className="border-blue-400 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-1 select-none">
                        < SiLinkedin />
                        LinkedIn
                    </Button>
                </Anchor>
            </nav>
        </div>
    );
}