import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const MotionDiv = motion.div;

export default function Presentation() {
    const [userPhoto, setUserPhoto] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/user/108343328")
            .then((response) => response.json())
            .then((data) => setUserPhoto(data.avatar_url))
            .catch((err) => console.error(err));
    }, []);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        }),
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.6, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: 0.9,
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <div className="flex flex-wrap items-center w-full justify-between relative p-100 max-sm:p-4 max-sm:justify-center max-sm:space-y-10">
            <div className="flex flex-col space-y-4 max-sm:space-y-2">
                <div className="flex space-x-1">
                    {["Hello,", "my name is"].map((text, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            custom={index + 1}
                        >
                            <span className="text-2xl max-sm:text-xl">{text}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    custom={3}
                    className="flex flex-col gap-4"
                >
                    <h1 className="text-8xl font-bold max-sm:text-4xl">Edgar Augusto</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 2,
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                    }}
                >
                    <h2 className="text-2xl font-light text-zinc-700 max-sm:text-xl">aka Ed</h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    custom={4}
                >
                    <h2 className="text-2xl mt-5 max-sm:hidden">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Dev ")
                                    .pauseFor(1000)
                                    .typeString("full stack")
                                    .pauseFor(1500)
                                    .deleteChars(10)
                                    .pauseFor(500)
                                    .typeString("mobile")
                                    .pauseFor(1500)
                                    .deleteChars(6)
                                    .pauseFor(500)
                                    .typeString("desktop")
                                    .pauseFor(1000)
                                    .start();
                            }}
                            options={{
                                delay: 75,
                                deleteSpeed: 40,
                                cursor: "|",
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col items-center relative">
                <MotionDiv
                    className="w-75 relative z-10 flex justify-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MotionDiv
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    >
                        <img
                            src={userPhoto}
                            className="rounded-full w-full shadow-xl"
                        />
                    </MotionDiv>
                </MotionDiv>

                <div className="text-center">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <b className="text-2xl text-zinc-800">Currently</b>
                        <p className="text-zinc-700">
                            <b className="font-medium">Technical Support Intern</b> at{" "}
                            <Tooltip className="font-medium">
                                <TooltipTrigger className="decoration-1">
                                    <b className="font-medium">SEMCULT</b>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Secretaria Municipal de Cultura e Turismo de Belém</p>
                                </TooltipContent>
                            </Tooltip>
                        </p>
                    </MotionDiv>
                </div>
            </div>
        </div>
    );
}