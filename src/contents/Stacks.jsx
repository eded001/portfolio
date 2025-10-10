import Title from "@/components/Title";
import { Card, CardContent } from "@/components/ui/card";

// icons
import {
  SiCss3, SiDocker, SiElectron,
  SiExpress, SiGit, SiHtml5,
  SiJavascript, SiMarkdown, SiMysql,
  SiNodedotjs, SiNpm, SiPhp,
  SiPrisma, SiPython, SiReact,
  SiSequelize, SiSqlite, SiSupabase, SiTypescript
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import Subtitle from "@/components/Subtitle";

export default function TechStack() {
  const stacks = {
    frontEnd: [
      { icon: SiHtml5, color: "#E34F26", name: "HTML5" },
      { icon: SiCss3, color: "#1572B6", name: "CSS3" },
      { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
      { icon: SiMarkdown, color: "#000", name: "Markdown" },
      { icon: SiReact, color: "#21A8C7", name: "React" },
    ],
    backEnd: [
      { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
      { icon: SiPython, color: "#FFD43B", name: "Python" },
      { icon: AiOutlineJava, color: "#EB2025", name: "Java" },
      { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
      { icon: SiPhp, color: "#777BB4", name: "PHP" },
      { icon: SiMysql, color: "#4479A1", name: "MySQL" },
      { icon: SiSqlite, color: "#003B57", name: "SQLite" },
      { icon: SiSupabase, color: "#3ECF8E", name: "Supabase" },
      { icon: SiExpress, color: "#000000", name: "Express" },
      { icon: SiPrisma, color: "#2D3748", name: "Prisma" },
      { icon: SiSequelize, color: "#52B0E7", name: "Sequelize" },
    ],
    others: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
      { icon: SiNpm, color: "#D50000", name: "NPM" },
      { icon: SiElectron, color: "#47848F", name: "Electron" },
      { icon: SiReact, color: "#0096B9", name: "ReactNative" },
    ]
  };

  return (
    <div className="space-y-6 w-[100%]">
      <div className="space-y-2">
        <Title>Stacks</Title>
        <Subtitle>I can get ideas off the ground using...</Subtitle>
      </div>

      <div className="grid grid-cols-2 items-center border-2 text-center border-zinc-400">
        <section>
          <h3>Front-End</h3>
        </section>
        <section>
          <h3>Back-End</h3>
        </section>
      </div>
    </div>
  );
}