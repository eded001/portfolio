import { FaHeart, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { useT } from "@/hooks/useT";

export default function Footer() {
    const t = useT();

    const socialMedias = [
        {
            href: "https://instagram.com/eded.dev",
            name: "Instagram",
            bg: "bg-gradient-to-r from-[#e95fa2] to-[#d62976]"
        },
        {
            href: "https://linkedin.com/in/edgar-augusto",
            name: "LinkedIn",
            bg: "bg-gradient-to-r from-blue-500 to-blue-700"
        },
        {
            href: "https://github.com/eded001",
            name: "GitHub",
            bg: "bg-gradient-to-r from-zinc-500 to-zinc-900"
        }
    ];

    return (
        <footer className="flex flex-col justify-center text-center text-base bg-zinc-100 rounded-t-2xl py-5 max-lg:px-5">
            <p className="max-lg:hidden">
                {t("footer.follow")}
            </p>

            <ul className="flex justify-center space-x-5 my-2 max-lg:hidden">
                {socialMedias.map((social) => (
                    <li
                        key={social.name}
                        className={`${social.bg} bg-clip-text font-extrabold text-transparent p-1 rounded-md cursor-pointer`}
                    >
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${social.bg} bg-clip-text text-transparent`}
                        >
                            {social.name}
                        </a>
                    </li>
                ))}
            </ul>

            <p className="mt-5">
                <b className="font-mono">&lt;Coded/&gt;</b> {t("footer.with")}{" "}
                <FaHeart color="#f00" className="inline-block" />{" "}
                {t("footer.by")}{" "}
                <span className="font-semibold">$&#123;Ed&#125;</span>{" "}
                {t("footer.using")}{" "}
                <FaReact color="#00D8FF" className="inline-block" />{" "}
                {t("footer.and")}{" "}
                <RiTailwindCssFill color="#35BEF8" className="inline-block" />
            </p>
        </footer>
    );
}