import { SiLinkedin } from "react-icons/si";

// Components
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Anchor from "@/components/Anchor";

export default function Header() {
    return (
        <div className="border-1 top-0 border-red-500 fixed flex justify-between min-h-fit w-full px-10 py-5 backdrop-blur-sm">
            <div className="flex space-x-1 items-center select-none">
                <Logo />
                <div>Edgar Augusto</div>
            </div>

            <nav className="flex space-x-5 items-center">
                <ul className="flex space-x-2">
                    <li><Anchor>Home</Anchor></li>
                    <li><Anchor>Expertise</Anchor></li>
                    <li><Anchor>Skills</Anchor></li>
                    <li><Anchor>Projects</Anchor></li>
                    <li><Anchor>Contact</Anchor></li>
                </ul>

                <Button className="bg-blue-500">
                    < SiLinkedin />
                    Linkedin
                </Button>
            </nav>
        </div>
    );
}