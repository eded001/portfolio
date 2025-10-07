import Anchor from "@/components/Anchor";
import { motion } from "framer-motion";

export default function Footer() {
    const socialMedias = [
        {
            href: "https://instagram.com/eded.dev",
            name: "Instagram",
            bg: "bg-gradient-to-r from-[#e95fa2] to-[#d62976]",
            hoverColor: "#d62976"
        },
        {
            href: "https://linkedin.com/in/edgar-augusto",
            name: "LinkedIn",
            bg: "bg-gradient-to-r from-blue-500 to-blue-700",
            hoverColor: "#1447e6"
        },
        {
            href: "https://github.com/eded001",
            name: "GitHub",
            bg: "bg-gradient-to-r from-gray-500 to-gray-900",
            hoverColor: "#101828"
        }
    ];

    return (
        <footer className="h-[10dvh] p-2 text-center text-sm">
            <p>Let's networking on</p>

            <ul className="flex justify-center space-x-5 my-2">
                {socialMedias.map((social) => (
                    <li
                        key={social.name}
                        className={`${social.bg} bg-clip-text font-extrabold text-transparent p-1 rounded-md cursor-pointer`}
                    >
                        <motion.li
                            key={social.name}
                            initial={{ color: "transparent" }}
                            whileHover={{ color: social.hoverColor }}
                            transition={{ duration: 0.3 }}
                        >
                            <Anchor href={social.href} target="_blank" className={`${social.bg} bg-clip-text text-transparent`}>
                                {social.name}
                            </Anchor>
                        </motion.li>
                    </li>
                ))}
            </ul>

            <p>Made by <b>Edgar Augusto</b> with <b>React</b> and <b>TailwindCSS</b> | Hosted on <b>GitHub Pages</b></p>
        </footer>
    );
}