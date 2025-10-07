import Title from "@/components/Title";
import { LuExternalLink } from "react-icons/lu";

// components
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
    const projects = [
        {
            title: "Duck Manager",
            type: "Application Desktop",
            description:
                "Desktop application developed in Electron for product management, with integration between Java and JavaScript, focused on simplicity and productivity for internal control.",
            link: "http://github.com/amazonext/duck-manager",
            stacks: ["HTML", "CSS", "JS", "Java", "Electron"],
        },
        {
            title: "Calop Agender",
            type: "Application Mobile",
            description:
                "Mobile application created in React Native for scheduling services, using SQLite for data persistence and providing a practical and intuitive user experience.",
            link: "http://github.com/amazonext/calop-agender",
            stacks: ["JS", "SQLite", "React Native"],
        },
        {
            title: "Breastfeeding Informative",
            type: "Application Web Front End",
            description:
                "Freelance informational website with a focus on accessibility and clean design, dedicated to raising awareness and disseminating information about breastfeeding.",
            link: "https://eded001.github.io/aleitamento-materno/",
            stacks: ["HTML", "CSS"],
        },
        {
            title: "Call Center (Help Now)",
            type: "Application Web Full Stack",
            description: (
                <>
                    Full-stack web platform for ticket management, developed for {" "}
                    <a
                        href="https://semcult.belem.pa.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline inline-flex items-center"
                    >
                        SEMCULT <LuExternalLink className="ml-1 h-4 w-4" />
                    </a> (Secretaria Municipal de Cultura e Turismo - Municipal Department of Culture and Tourism). Includes authentication, real-time communication via WebSocket, and persistence with Prisma and SQLite.
                </>
            ),
            link: "http://github.com/semcult-belem/central-chamados",
            stacks: ["HTML", "CSS", "JS", "SQLite", "Express", "Prisma", "WebSocket"],
        },
    ];

    return (
        <div className="space-y-6" id="projects">
            <Title>Projects</Title>

            <div className="flex flex-wrap gap-4 justify-center items-start">
                {projects.length === 0 ? (
                    <p>Nenhum projeto para mostrar.</p>
                ) : (
                    projects.map((project, idx) => (
                        <Card key={idx} className="w-[300px] border">
                            <CardHeader>
                                <img src="https://frogs.media/static/frog.png" className="rounded-xl" />
                                <CardTitle className="text-center">{project.title}</CardTitle>
                                <CardDescription className="text-center">{project.type}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-justify text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.stacks.map((stack, i) => (
                                        <Badge key={i} className="select-none">{stack}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center gap-2">
                                <Button asChild variant="secondary" size="sm">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        See more <LuExternalLink className="ml-1 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}