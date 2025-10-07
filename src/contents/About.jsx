import Title from "@/components/Title";

export default function About() {
    return (
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 gap-8 px-4 py-10" id="about">
            <div className="flex flex-col space-y-5 text-center rounded-xl p-5 h-64 w-64 mx-auto justify-center select-none">
                <img src="https://media.istockphoto.com/id/1137958103/photo/dachshund-sausage-dog-1-year-old-sitting-in-front-of-white-background.jpg?s=612x612&w=0&k=20&c=6u86XPFmF8YkcIkApGmjygjosJT9OLH0ysRjtfqvtYs=" />
            </div>

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