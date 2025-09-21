import Title from "@/components/Title";
import { Badge, Box, Button, Card, Flex, For, Link, Stack, Text } from "@chakra-ui/react";

export default function Projects() {
    const projects = [
        {
            title: "Duck Manager",
            description: "Desktop application developed in Electron for product management, with integration between Java and JavaScript, focused on simplicity and productivity for internal control.",
            link: "http://github.com/amazonext/duck-manager",
            stacks: ["HTML", "CSS", "JS", "Java", "Electron"],
        },
        {
            title: "Calop Agender",
            description: "Mobile application created in React Native for scheduling services, using SQLite for data persistence and providing a practical and intuitive user experience.",
            link: "http://github.com/amazonext/calop-agender",
            stacks: ["JS", "SQLite", "React Native"],
        },
        {
            title: "Breastfeeding Informative",
            description: "Freelance informational website with a focus on accessibility and clean design, dedicated to raising awareness and disseminating information about breastfeeding.",
            link: "eded001.github.io/aleitamento-materno/",
            stacks: ["HTML", "CSS"],
        },
        {
            title: "Call Center (Help Now)",
            description: (
                <>
                    Full-stack web platform for ticket management, developed for <Link href="https://semcult.belem.pa.gov.br/">SEMCULT (Secretaria Municipal de Cultura e Turismo)</Link>. Includes authentication, real-time communication via WebSocket, and persistence with Prisma and SQLite.
                </>
            ),
            link: "http://github.com/semcult-belem/central-chamados",
            stacks: ["HTML", "CSS", "JS", "SQLite", "Express", "Prisma", "WebSocket"],
        },
    ];

    return (
        <Box>
            <Title>
                Projects
            </Title>

            <Flex wrap="wrap" gap={4} justify="center" align={"flex-start"}>
                <For each={projects} fallback={<Text>Nenhum projeto para mostrar.</Text>}>
                    {(project, idx) => (
                        <Card.Root key={idx} border="1px solid gray" width="300px">
                            <Card.Header>
                                <Card.Title>{project.title}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Card.Description>
                                    <Text lineClamp={3}>{project.description}</Text>
                                </Card.Description>
                                <Stack mt={3} direction="row" wrap="wrap" spacing={2}>
                                    {project.stacks.map((stack, i) => (
                                        <Badge key={i}>
                                            {stack}
                                        </Badge>
                                    ))}
                                </Stack>
                            </Card.Body>
                            <Card.Footer gap={2}>
                                <Button size="sm">Details</Button>
                                <Button as="a" href={project.link} target="_blank" variant="surface" size="sm">
                                    View repository
                                </Button>
                            </Card.Footer>
                        </Card.Root>
                    )}
                </For>
            </Flex>
        </Box>
    );
}