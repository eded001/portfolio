import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import { useT } from "@/hooks/useT";

import type { IconType } from "react-icons";

type StackItem = {
  icon: IconType;
  color: string;
  name: string;
};

// icons
import {
  SiCss3, SiDocker, SiElectron,
  SiExpress, SiGit, SiHtml5,
  SiJavascript, SiMarkdown, SiMysql,
  SiNodedotjs, SiPhp, SiPrisma,
  SiPython, SiReact, SiSequelize,
  SiSqlite, SiSupabase, SiTypescript
} from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";

export default function TechStack() {
  const t = useT();

  const stacks: Record<string, StackItem[]> = {
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
      { icon: SiExpress, color: "#000", name: "Express" },
      { icon: SiPrisma, color: "#2D3748", name: "Prisma" },
      { icon: SiSequelize, color: "#52B0E7", name: "Sequelize" },
    ],
    others: [
      { icon: SiGit, color: "#F05032", name: "Git" },
      { icon: SiDocker, color: "#2496ED", name: "Docker" },
      { icon: SiElectron, color: "#47848F", name: "Electron" },
      { icon: SiReact, color: "#0096B9", name: "React Native" },
    ]
  };

  const renderStack = (category: string) =>
    stacks[category].map(({ icon: Icon, color, name }, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center p-4 hover:scale-105 transition-transform shadow-md cursor-pointer select-none rounded-lg"
        style={{ backgroundColor: color }}
      >
        <Icon size={36} color="white" className="drop-shadow-md" />
        <p className="text-white">{name}</p>
      </div>
    ));

  return (
    <div className="space-y-6 w-full p-20 max-sm:p-5 max-lg:p-5">
      <div className="space-y-2">
        <Title>{t("stacks.title")}</Title>
        <Subtitle>{t("stacks.subtitle")}</Subtitle>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-center border-b pb-1">Front-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {renderStack("frontEnd")}
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-center border-b pb-1">Back-End</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {renderStack("backEnd")}
          </div>
        </section>
      </div>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-center border-b pb-1">
          {t("stacks.others")}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {renderStack("others")}
        </div>
      </section>
    </div>
  );
}