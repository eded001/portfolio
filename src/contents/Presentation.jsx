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
    const socialMedias = [
        { href: "https://instagram.com/eded.dev", icon: SiInstagram },
        { href: "https://github.com/eded001", icon: SiGithub },
        { href: "https://www.linkedin.com/in/edgar-augusto/", icon: SiLinkedin }
    ];

    return (
        <div className="flex flex-wrap justify-between items-center w-full -z-1">
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
                <div className="flex space-x-1">
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
                    className="text-2xl pt-5"
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

            <div className="flex justify-center items-center flex-1 relative">
                <MotionDiv
                    className="font-mono absolute"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                >
                    <span className="text-6xl font-bold">&lt;</span>
                    <span className="text-8xl font-light">EA</span>
                    <span className="text-6xl font-bold">/&gt;</span>
                </MotionDiv>

                <MotionDiv
                    className="flex gap-5 absolute top-15 mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
                >
                    {
                        socialMedias.map((media, index) => (
                            <MotionDiv
                                key={index}
                                whileHover={{ scale: 1.5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon href={media.href}>
                                    <media.icon color={"#171717"} size={size} />
                                </Icon>
                            </MotionDiv>
                        ))
                    }
                </MotionDiv>
            </div>
        </div>
    );
}