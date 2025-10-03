import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const MotionDiv = motion.div;
const MotionSpan = motion.span;

function Icon({ href, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
        >
            {children}
        </a>
    );
}

export default function Presentation() {
    const size = 25;

    return (
        <div className="flex flex-wrap justify-between items-center w-full">
            {/* Texto principal */}
            <MotionDiv
                initial="hidden"
                animate="visible"
                className="flex flex-col space-y-2"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
            >
                <div className="flex space-x-2">
                    <MotionSpan
                        className="text-2xl"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 0.5 }
                            }
                        }}
                    >
                        Hello,
                    </MotionSpan>

                    <MotionSpan
                        className="text-2xl"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 1 }
                            }
                        }}
                    >
                        my name is
                    </MotionSpan>
                </div>

                <MotionSpan
                    className="text-8xl font-bold"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 1.5, delay: 1.5 }
                        }
                    }}
                >
                    Edgar Augusto
                </MotionSpan>

                <MotionSpan
                    className="text-2xl"
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.8, delay: 3 }
                        }
                    }}
                >
                    Dev Full Stack | Dev Mobile | Aspiring Tech Lead
                </MotionSpan>
            </MotionDiv>

            <div className="flex flex-col justify-center items-center flex-1">
                <MotionDiv
                    className="text-center font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                >
                    <span className="text-6xl font-bold">&lt;</span>
                    <span className="text-8xl font-light">EA</span>
                    <span className="text-6xl font-bold">/&gt;</span>
                </MotionDiv>

                <MotionDiv
                    className="flex gap-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
                >
                    <Icon href="https://instagram.com/eded.dev">
                        <SiInstagram color={"#000"} size={size} />
                    </Icon>

                    <Icon href="https://github.com/eded001">
                        <SiGithub color={"#000"} size={size} />
                    </Icon>

                    <Icon href="https://www.linkedin.com/in/edgar-augusto/">
                        <SiLinkedin color={"#000"} size={size} />
                    </Icon>
                </MotionDiv>
            </div>
        </div>
    );
}