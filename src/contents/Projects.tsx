import Title from "@/components/Title";
import { LuExternalLink } from "react-icons/lu";

// components
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// images
import { aleitamentoMaterno, calopAgender, duckManager, helpNow } from "../imgs/share";

export default function Projects() {
    const projects = [
        {
            title: "Duck Manager",
            type: "Application Desktop - Full Stack",
            description:
                "Desktop application developed in Electron for product management, with integration between Java and JavaScript, focused on simplicity and productivity for internal control.",
            print: duckManager,
            link: "http://github.com/amazonext/duck-manager",
            stacks: ["HTML", "CSS", "JS", "Java", "Electron"],
        },
        {
            title: "Calop Agender",
            type: "Application Mobile - Full Stack",
            description:
                "Mobile application created in React Native for scheduling services, using SQLite for data persistence and providing a practical and intuitive user experience.",
            print: calopAgender,
            link: "http://github.com/amazonext/calop-agender",
            stacks: ["JS", "SQLite", "React Native"],
        },
        {
            title: "Breastfeeding Informative",
            type: "Application Web - Static Front-End",
            description:
                "Freelance informational website with a focus on accessibility and clean design, dedicated to raising awareness and disseminating information about breastfeeding.",
            print: aleitamentoMaterno,
            link: "https://eded001.github.io/aleitamento-materno/",
            stacks: ["HTML", "CSS"],
        },
        {
            title: "Call Center (Help Now)",
            type: "Application Web - Full Stack",
            description: (
                <>
                    Full-stack web platform for ticket management, developed for {" "}
                    <a
                        href="https://semcult.belem.pa.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:underline inline-flex items-center"
                    >
                        SEMCULT <LuExternalLink className="ml-1 h-4 w-4" />
                    </a> (Secretaria Municipal de Cultura e Turismo de Belém - Municipal Department of Culture and Tourism of Belém). Includes authentication, real-time communication via WebSocket, and persistence with Prisma and SQLite.
                </>
            ),
            print: helpNow,
            link: "http://github.com/semcult-belem/central-chamados",
            stacks: ["HTML", "CSS", "JS", "SQLite", "Express", "Prisma", "WebSocket"],
        },
    ];

    return (
        <div className="space-y-6 px-15 py-5
        max-sm:px-5
        max-lg:px-5
        ">
            <Title>Projects</Title>

            <div className="flex flex-wrap gap-4 justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, id) => (
                        <Card key={id} className="bg-zinc-200 border-zinc-300 border gap-0">
                            <CardHeader className="relative flex flex-col items-center justify-center h-75 overflow-hidden rounded-xl p-10 rounded-b-none border-b-2 border-zinc-400
                            max-sm:p-5
                            max-lg:p-5
                            ">
                                <span
                                    className="absolute inset-0 bg-center bg-cover scale-110 blur-sm"
                                    style={{ backgroundImage: `url(${project.print})` }}
                                />
                                <div className="relative aspect-[16/9] overflow-hidden">
                                    <img
                                        src={project.print}
                                        alt={project.title}
                                        className="object-center w-full h-full rounded-sm"
                                    />
                                </div>
                            </CardHeader>

                            <CardContent>
                                <CardTitle className="font-bold text-zinc-800 text-center text-2xl mt-1">{project.title}</CardTitle>
                                <CardDescription className="font-medium text-zinc-700 text-center mb-2">{project.type}</CardDescription>

                                <p className="text-justify text-sm text-zinc-500">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.stacks.map((stack, i) => (
                                        <Badge key={i} className="select-none bg-neutral-600">{stack}</Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="flex justify-center mt-8">
                                <Button asChild size="sm" className="bg-neutral-400 w-50 text-neutral-600 hover:bg-neutral-300 hover:text-neutral-500">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        See more <LuExternalLink className="h-4 w-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}