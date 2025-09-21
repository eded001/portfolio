import Title from "@/components/Title";

import { Box, Wrap, HoverCard, Portal, Text } from "@chakra-ui/react";

// language icons
import {
  SiApachemaven, SiCss3, SiDocker,
  SiElectron, SiExpo, SiExpress,
  SiGit, SiHtml5, SiJavascript,
  SiMarkdown, SiMysql, SiNodedotjs,
  SiNodemon, SiNpm, SiPhp,
  SiPrisma, SiPython, SiReact,
  SiSequelize, SiSqlite, SiSupabase, SiTypescript
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";

export default function TechStack() {
  const stacks = {
    frontEnd: [
      { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
      { icon: SiCss3, color: "#1572B6", name: "CSS3" },
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiMarkdown, color: "#000", name: "Markdown" },
    ],
    backEnd: [
      { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { icon: SiPython, color: "#FFCD3B", name: "Python" },
      { icon: AiOutlineJava, color: "#EB2025", name: "Java" },
      { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { icon: SiPhp, color: "#777BB4", name: "PHP" },
    ],
    frameworks: [
      { icon: SiReact, color: "#61DAFB", name: "React" },
      { icon: SiExpress, color: "#000000", name: "Express" },
      { icon: SiPrisma, color: "#2D3748", name: "Prisma" },
      { icon: SiSequelize, color: "#52B0E7", name: "Sequelize" },
      { icon: SiElectron, color: "#47848F", name: "Electron" },
    ],
    db: [
      { icon: SiMysql, color: "#4479A1", name: "MySQL" },
      { icon: SiSqlite, color: "#003B57", name: "SQLite" },
      { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
    ],
    others: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
      { icon: SiNpm, color: "#D50000", name: "NPM" },
      { icon: SiNodemon, color: "#76D04B", name: "Nodemon" },
      { icon: SiExpo, color: "#000020", name: "Expo" },
      { icon: SiApachemaven, color: "#F0931E", name: "Maven" },
    ]
  };

  return (
    <Box>
      <Title>Stacks</Title>

      <Wrap gap={20} align="center" justify="center">
        {Object.values(stacks).flat().map(({ icon: IconComponent, color, name }, index) => (
          <HoverCard.Root key={index}>
            <HoverCard.Trigger asChild>
              <Box
                bg="gray.700"
                p={3}
                borderRadius="md"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                transition="all 0.3s ease"
                _hover={{
                  bg: color,
                  transform: "scale(1.25)",
                }}
              >
                <IconComponent size={40} color="white" />
              </Box>
            </HoverCard.Trigger>

            <Portal>
              <HoverCard.Positioner>
                <HoverCard.Content maxWidth="200px">
                  <HoverCard.Arrow />
                  <Text fontWeight="bold" textAlign="center">{name}</Text>
                </HoverCard.Content>
              </HoverCard.Positioner>
            </Portal>
          </HoverCard.Root>
        ))}
      </Wrap>
    </Box>
  );
}