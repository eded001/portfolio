import Title from "@/components/Title";

export default function About() {
    return (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10">
            <div className="flex flex-col space-y-5 text-center">
                <Title>A little bit of me</Title>

                <p className="text-xl leading-relaxed">
                    I'm a versatile developer with strong expertise in JavaScript, experienced in
                    front-end, back-end, and mobile development. I enjoy building full-stack
                    solutions and automating workflows. Passionate about solving real-world
                    problems, I continuously explore new technologies and methodologies.
                </p>

                <p className="text-xl leading-relaxed">
                    Outside of work, I’m an artist and writer, always seeking ways to grow,
                    challenge myself, and enjoy life. Let’s create impactful solutions together!
                </p>

                <p className="text-xl leading-relaxed italic">
                    Always learning, always experimenting, always aiming to turn ideas into reality.
                </p>
            </div>

            <div className="flex flex-col space-y-5 text-center border-4 border-gray-400 rounded-xl p-5 h-64 w-64 mx-auto justify-center">
                <div className="after:content-['IMG'] text-gray-400 font-extrabold"></div>
            </div>
        </div>
    );
}