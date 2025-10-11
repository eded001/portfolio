import { FaHeart, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center text-center text-base py-1">
            <p>
                <b className="font-mono">&lt;Coded/&gt;</b> with <FaHeart color="#f00" className="inline-block" /> by <span className="font-semibold">$&#123;Ed&#125;</span> using <FaReact color="#00D8FF" className="inline-block" /> and <RiTailwindCssFill color="#35BEF8" className="inline-block" />
            </p>
        </footer>
    );
}