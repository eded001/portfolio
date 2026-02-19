import { Button } from "@/components/ui/button";
import { IoIosMail } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";

import { useT } from "@/hooks/useT";

export default function ContactMe() {
    const t = useT();

    return (
        <div className="flex items-center justify-center flex-col gap-10 text-center h-[100vh] max-sm:px-5 max-lg:px-5">
            <h1 className="text-4xl font-bold text-zinc-900 max-lg:text-4xl">
                {t("contact.titleLine1")} <br />
                {t("contact.titleLine2")}
            </h1>

            <p className="max-w-xl max-sm:text-lg max-lg:text-lg">
                {t("contact.description1")} <br />
                {t("contact.description2")}
            </p>

            <div className="flex gap-5 items-center">
                <Button
                    asChild
                    variant={"secondary"}
                    className="bg-blue-300 text-blue-600 hover:bg-blue-200 hover:text-blue-500"
                >
                    <a
                        href="https://www.linkedin.com/in/edgar-augusto/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("contact.linkedin")} <SiLinkedin />
                    </a>
                </Button>

                <p>{t("contact.or")}</p>

                <Button
                    asChild
                    className="bg-red-300 text-red-600 hover:bg-red-200 hover:text-red-500"
                >
                    <a
                        href="mailto:edgarams.profissional@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("contact.email")} <IoIosMail />
                    </a>
                </Button>
            </div>
        </div>
    );
}