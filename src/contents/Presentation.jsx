import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import Anchor from "@/components/Anchor";
import { motion } from "framer-motion";

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
    const socialMedias = [
        { href: "https://instagram.com/eded.dev", icon: SiInstagram },
        { href: "https://linkedin.com/in/edgar-augusto", icon: SiLinkedin },
        { href: "https://github.com/eded001", icon: SiGithub }
    ];

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        })
    };

    const nameVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    const socialVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 3 + i * 0.2,
                type: "spring",
                stiffness: 120,
                damping: 10
            }
        })
    };

    return (
        <div className="flex flex-wrap items-center w-full justify-between">
            <div className="flex flex-col space-y-4">
                <div className="flex space-x-1">
                    {["Hello,", "my name is"].map((text, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            custom={index + 1}
                        >
                            <span className="text-2xl">{text}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    custom={3}
                >
                    <span className="text-8xl font-bold">Edgar Augusto</span>
                </motion.div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    custom={4}
                >
                    <span className="text-2xl pt-5">Dev Full Stack &bull; Dev Mobile</span>
                </motion.div>
            </div>

            <div className="flex flex-col items-center select-none relative">
                <div className="w-75 relative z-10 flex justify-center">
                    <MotionDiv
                        initial={{ clipPath: "circle(0% at 50% 50%)" }}
                        animate={{ clipPath: "circle(50% at 50% 50%)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-64 h-64 mask-radial-closest-side mask-radial-from-90% mask-radial-at-[50%_50%] bg-cover bg-center bg-[url(https://frogs.media/static/frog.png)]"
                    />
                </div>

                <div className="absolute -bottom-8 flex space-x-5">
                    {socialMedias.map(({ href, icon: Icon }, index) => (
                        <MotionDiv
                            key={index}
                            initial={{ opacity: 0, y: -40, x: (index - 1) * 20, scale: 0.5 }}
                            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 12,
                                delay: 2 + index * 0.2
                            }}
                            whileHover={{ scale: 1.5 }}
                            whileTap={{ scale: 0.9 }}
                            className="relative"
                        >
                            <Anchor href={href} target="_blank">
                                <Icon size={20} />
                            </Anchor>
                        </MotionDiv>
                    ))}
                </div>
            </div>

        </div>
    );
}