import Title from "@/components/Title";
import { me } from "../imgs/share";

export default function About() {
    return (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10">
            <picture className="grid place-items-center">
                <img src={me} className="rounded-xl w-3/4" />
            </picture>

            <div className="flex flex-col space-y-5 text-justify">
                <Title>A little bit of me</Title>

                <p className="text-xl leading-relaxed">
                    I'm a junior full stack developer with solid expertise in JavaScript and React, and hands-on experience in mobile development with React Native. I'm passionate about technology, leadership, and solving real-world problems — always eager to take on new challenges and keep growing.
                </p>

                <p className="text-xl leading-relaxed">
                    When I’m not coding, you’ll find me acting, writing, or exploring the world of music and musicians.
                </p>
            </div>
        </div>
    );
}