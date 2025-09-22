import { Stack, Text, Wrap } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Presentation() {
    const roles = ["Full Stack", "Mobile", "Frontend", "Backend"];
    const [index, setIndex] = useState(0);
    const [subText, setSubText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[index];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setSubText((prev) => prev.slice(0, -1));
                if (subText === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % roles.length);
                }
            }, 100); // velocidade de apagar
        } else {
            if (subText !== current) {
                timer = setTimeout(() => {
                    setSubText(current.slice(0, subText.length + 1));
                }, 150); // velocidade de digitar
            } else {
                timer = setTimeout(() => setIsDeleting(true), 1500); // tempo de espera antes de apagar
            }
        }

        return () => clearTimeout(timer);
    }, [subText, isDeleting, index, roles]);

    return (
        <Wrap align={"center"} gap={20}>
            <Stack>
                <Text fontSize={"2xl"}>Hello, my name is</Text>
                <Text fontSize={"8xl"} as={"span"}>
                    Edgar Souza
                </Text>
                <Text fontSize={"2xl"}>
                    Dev Full Stack | Dev Mobile | Aspiring Tech Lead
                </Text>
            </Stack>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <Stack>
                    <Text fontSize="7xl" fontWeight="light" fontFamily="monospace">
                        <Text as="span" fontWeight="bold">
                            &lt;
                        </Text>

                        Dev{" "}
                        <motion.span
                            key={subText}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1 }}
                        >
                            {subText}
                        </motion.span>

                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            style={{ display: "inline-block" }}
                        >
                            |
                        </motion.span>

                        <Text as="span" fontWeight="bold">
                            /&gt;
                        </Text>
                    </Text>
                </Stack>
            </motion.div>
        </Wrap>
    );
}