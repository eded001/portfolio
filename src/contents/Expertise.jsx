import Title from "@/components/Title";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCode } from "react-icons/fa6";
import { RiTeamLine } from "react-icons/ri";
import { LuBrain } from "react-icons/lu";
import { ImMobile } from "react-icons/im";

export default function Expertise() {
    const expertises = [
        {
            title: "Full Stack Development",
            description: "I design and develop complete applications, combining solid front-end experiences with robust back-end architectures. My focus is on performance, scalability, clean code, and seamless integration between APIs and SQL/NoSQL databases.",
            icon: FaCode
        },
        {
            title: "Mobile Development",
            description: "I build modern, high-performance apps with responsive design and smooth navigation. I prioritize user experience, consistent UI patterns, and efficient integration with APIs and back-end systems.",
            icon: ImMobile
        },
        {
            title: "Leadership",
            description: "I believe in collaborative leadership built on trust, empathy, and clear communication. I encourage teamwork, technical excellence, and decision-making that aligns with both the team's growth and project goals.",
            icon: RiTeamLine
        },
        {
            title: "Solving Problems",
            description: "I approach challenges strategically, combining analytical thinking with creativity to find efficient and sustainable solutions. My focus is always on impact — solving real problems that improve user and business outcomes.",
            icon: LuBrain
        }
    ];

    return (
        <div className="space-y-6">
            <Title>Expertises</Title>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {
                    // eslint-disable-next-line no-unused-vars
                    expertises.map(({ icon: Icon, title, description }, index) => (
                        <Card key={index} className="border-1 bg-zinc-400 h-60 w-75">
                            <CardHeader className={"flex flex-row items-center bg-zinc-600 rounded-t-lg border-b-2 border-zinc-400 pl-2 pt-2 pb-2 text-xl"}>
                                <Icon size={40} className="text-zinc-100" />
                                <CardTitle className="font-bold text-zinc-300">{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-zinc-700 font-medium text-justify">{description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}