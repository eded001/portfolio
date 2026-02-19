import Title from "@/components/Title";
import { me } from "@/imgs/share";
import { useT } from "@/hooks/useT";

export default function About() {
    const t = useT();

    return (
        <div className="grid place-items-center grid-cols-1 gap-8 py-10 px-10
        md:grid-cols-2
        max-sm:p-5
        max-lg:p-5
        ">
            <picture className="grid place-items-center">
                <img
                    src={me}
                    alt={t("about.imageAlt")}
                    className="rounded-xl w-3/4
                    max-sm:w-full
                    max-lg:w-full
                    "
                />
            </picture>

            <div className="flex flex-col space-y-5 text-justify">
                <Title>{t("about.title")}</Title>

                <p className="text-xl max-sm:text-lg">
                    {t("about.p1")}
                </p>

                <p className="text-xl max-sm:text-lg">
                    {t("about.p2")}
                </p>
            </div>
        </div>
    );
}