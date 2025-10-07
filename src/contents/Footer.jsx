import Anchor from "@/components/Anchor";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

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
        <footer className="h-[25dvh] flex flex-col justify-center p-2 text-center text-sm">
            <p>Please, don't forget to follow me in my social</p>

            <ul className="flex justify-center space-x-5 my-2">
                {socialMedias.map((social) => (
                    <motion.li
                        key={social.name}
                        initial={{ color: "transparent" }}
                        whileHover={{ color: social.hoverColor }}
                        transition={{ duration: 0.3 }}
                        className={`${social.bg} bg-clip-text font-extrabold text-transparent p-1 rounded-md cursor-pointer`}
                    >
                        <Anchor href={social.href} target="_blank" className={`${social.bg} bg-clip-text text-transparent`}>
                            {social.name}
                        </Anchor>
                    </motion.li>
                ))}
            </ul>

            <p>Made with <FaHeart color="#f00" className="inline-block" /> by <b className="font-mono">Edgar Augusto</b> with <b className="font-mono text-[#00D8FF]">React</b> and <b className="font-mono text-[#35BEF8]">TailwindCSS</b></p>
        </footer>
    );
}