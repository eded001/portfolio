import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import Anchor from "@/components/Anchor";

export default function SocialMedias({ size = 20 }) {
    const socialMedias = [
        { href: "https://instagram.com/eded.dev", icon: SiInstagram },
        { href: "https://linkedin.com/in/edgar-augusto", icon: SiLinkedin },
        { href: "https://github.com/eded001", icon: SiGithub }
    ];

    return (
        <div className="flex space-x-5">
            {socialMedias.map(({ href, icon: Icon }, index) => (
                <Anchor
                    key={index}
                    href={href}
                    target="_blank"
                >
                    <Icon size={size} />
                </Anchor>
            ))}
        </div>
    );
}