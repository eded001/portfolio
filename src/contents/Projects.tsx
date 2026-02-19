import Title from "@/components/Title";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
    aleitamentoMaterno,
    calopAgender,
    duckManager,
    helpNow
} from "../imgs/share";

import { useT } from "@/hooks/useT";

export default function Projects() {
    const t = useT();

    const projects = [
        {
            key: "duck",
            print: duckManager,
            stacks: ["HTML", "CSS", "JS", "Java", "Electron"]
        },
        {
            key: "calop",
            print: calopAgender,
            stacks: ["JS", "SQLite", "React Native"]
        },
        {
            key: "breast",
            print: aleitamentoMaterno,
            stacks: ["HTML", "CSS"]
        },
        {
            key: "helpnow",
            print: helpNow,
            stacks: ["HTML", "CSS", "JS", "SQLite", "Express", "Prisma", "WebSocket"]
        }
    ];

    return (
        <div className="space-y-6 px-15 py-5 max-sm:px-5 max-lg:px-5">
            <Title>{t("projects.title")}</Title>

            <div className="flex flex-wrap gap-4 justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card
                            key={project.key}
                            className="bg-zinc-200 border-zinc-300 border gap-0"
                        >
                            <CardHeader className="relative flex flex-col items-center justify-center h-75 overflow-hidden rounded-xl p-10 rounded-b-none border-b-2 border-zinc-400 max-sm:p-5 max-lg:p-5">
                                <span
                                    className="absolute inset-0 bg-center bg-cover scale-110 blur-sm"
                                    style={{ backgroundImage: `url(${project.print})` }}
                                />

                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img
                                        src={project.print}
                                        alt={t(`projects.items.${project.key}.title`)}
                                        className="object-center w-full h-full rounded-sm"
                                    />
                                </div>
                            </CardHeader>

                            <CardContent>
                                <CardTitle className="font-bold text-zinc-800 text-center text-2xl mt-1">
                                    {t(`projects.items.${project.key}.title`)}
                                </CardTitle>

                                <CardDescription className="font-medium text-zinc-700 text-center mb-2">
                                    {t(`projects.items.${project.key}.type`)}
                                </CardDescription>

                                <p className="text-justify text-sm text-zinc-500">
                                    {t(`projects.items.${project.key}.description`)}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.stacks.map((stack) => (
                                        <Badge
                                            key={stack}
                                            className="select-none bg-neutral-600"
                                        >
                                            {stack}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}