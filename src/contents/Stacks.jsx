import Title from "@/components/Title";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// icons
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
      { icon: SiPython, color: "#FFD43B", name: "Python" },
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
    <div className="space-y-6">
      <Title>Stacks</Title>

      <div className="flex flex-wrap gap-6 justify-center">
        {Object.values(stacks).flat().map(({ icon: IconComponent, color, name }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <Card
              className="w-28 h-28 flex flex-col items-center justify-center rounded-2xl shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: color }}
            >
              <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                <IconComponent size={40} color="white" />
                <span className="text-sm font-semibold text-white user select-none">{name}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}