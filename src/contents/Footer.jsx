import Anchor from "@/components/Anchor";
import { motion } from "framer-motion";
import { FaHeart, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

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
            bg: "bg-gradient-to-r from-zinc-500 to-zinc-900",
            hoverColor: "#101828"
        }
    ];

    return (
        <footer className="h-[25dvh] flex flex-col justify-center pt-5 pb-5 text-center text-base">
            <p>Please, don't forget to follow me in my social medias</p>

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

            <p>
                <b className="font-mono">&lt;Coded/&gt;</b> with <FaHeart color="#f00" className="inline-block" /> by <span className="font-semibold">$&#123;Ed&#125;</span> using <FaReact color="#00D8FF"  className="inline-block" /> and <RiTailwindCssFill color="#35BEF8" className="inline-block" />
            </p>
        </footer>
    );
}