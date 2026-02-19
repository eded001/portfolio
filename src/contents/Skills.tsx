import Title from "@/components/Title";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { LuBrain } from "react-icons/lu";
import { ImMobile } from "react-icons/im";

import { useT } from "@/hooks/useT";

export default function Skills() {
    const t = useT();

    const skills = [
        { key: "fullstack", icon: FaCode },
        { key: "mobile", icon: ImMobile },
        { key: "leadership", icon: RiTeamLine },
        { key: "problemSolving", icon: LuBrain }
    ];

    return (
        <div className="space-y-6 max-sm:p-5">
            <Title>{t("skills.title")}</Title>

            <div className="grid grid-cols-1 gap-6 w-full sm:grid-cols-2 lg:grid-cols-4">
                {skills.map(({ key, icon: Icon }) => (
                    <Card
                        key={key}
                        className="border bg-zinc-400 h-60 w-75 max-sm:w-full max-lg:w-full"
                    >
                        <CardHeader className="flex flex-row items-center bg-zinc-600 rounded-t-lg border-b-2 border-zinc-400 pl-2 pt-2 pb-2 text-xl">
                            <Icon size={40} className="text-zinc-100" />
                            <CardTitle className="font-bold text-zinc-300">
                                {t(`skills.${key}.title`)}
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <CardDescription className="text-zinc-700 font-medium text-justify">
                                {t(`skills.${key}.description`)}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}