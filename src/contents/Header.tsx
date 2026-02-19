/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";

// Components
import Logo from "@/components/Logo";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

// i18n
import { useT } from "@/hooks/useT";
import { setLanguage } from "@/store/languageSlice";

export default function Header() {
    const dispatch = useDispatch();
    const language = useSelector((state : any) => state.language.locale);
    const t = useT();

    const sections = [
        { name: t("header.about"), href: "#about" },
        { name: t("header.skills"), href: "#skills" },
        { name: t("header.stacks"), href: "#stacks" },
        { name: t("header.projects"), href: "#projects" },
        { name: t("header.contact"), href: "#contact" }
    ];

    return (
        <div className="fixed top-0 flex justify-between min-h-[10vh] w-full px-10 py-5 backdrop-blur-md backdrop-invert-5 backdrop-grayscale-30 z-20 max-sm:px-5">
            <a href="#home" className="flex space-x-1 items-center text-2xl">
                <Logo />
            </a>

            <nav className="flex space-x-5 items-center">
                <ul className="flex space-x-2 max-md:hidden max-sm:hidden">
                    {sections.map((section) => (
                        <li
                            key={section.href}
                            className="text-zinc-700 hover:text-zinc-500"
                        >
                            <a
                                href={section.href}
                                target="_self"
                                rel="noopener noreferrer"
                                className="transition-colors duration-300"
                            >
                                {section.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <Select
                    value={language}
                    onValueChange={(lang) => dispatch(setLanguage(lang))}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={t("header.selectLanguage")} />
                    </SelectTrigger>

                    <SelectContent position="item-aligned">
                        <SelectGroup>
                            <SelectItem value="pt">PT-BR</SelectItem>
                            <SelectItem value="en">EN-US</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </nav>
        </div>
    );
}