import Title from "@/components/Title";
import { LuExternalLink } from "react-icons/lu";

// components
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// images
import { aleitamentoMaterno, calopAgender, duckManager, helpNow, me } from "@/imgs/share";
import { useBg } from "@/hooks/useBg";

export default function Projects() {
    const bgColor = useBg(me);
    console.log(bgColor);

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
            type: "Application Web - Static Front End",
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
                        className="text-blue-500 hover:underline inline-flex items-center"
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
        <div className="space-y-6">
            <Title>Projects</Title>

            <div className="flex flex-wrap gap-4 justify-center">
                {
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {projects.map((project, idx) => (
                            <Card key={idx} className="bg-zinc-200 border-zinc-300 border">
                                <CardHeader className="relative flex flex-col items-center justify-center h-[300px] overflow-hidden rounded-xl">
                                    {/* fundo  */}
                                    <span
                                        className="absolute inset-0 bg-center bg-cover scale-110 blur-sm"
                                        style={{ backgroundImage: `url(${project.print})` }}
                                    />

                                    {/* imagem */}
                                    <div className="relative w-full h-full">
                                        <span
                                            className="absolute inset-0 rounded-sm bg-center bg-cover bg-no-repeat transition-transform duration-500 ease-in-out scale-80 hover:scale-70"
                                            style={{ backgroundImage: `url(${project.print})` }}
                                        />
                                    </div>

                                </CardHeader>

                                <CardContent>
                                    <CardTitle className="text-center mt-4">{project.title}</CardTitle>
                                    <CardDescription className="text-center">{project.type}</CardDescription>

                                    <p className="text-justify text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {project.stacks.map((stack, i) => (
                                            <Badge key={i} className="select-none bg-neutral-600">{stack}</Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex justify-center gap-2">
                                    <Button asChild size="sm" className="bg-neutral-300 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-500">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            See more <LuExternalLink className="ml-1 h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}