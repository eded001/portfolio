import Icon from "@/components/Icon";
import { Stack, Text, HStack, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

const MotionStack = motion(Stack);
const MotionText = motion(Text);
const MotionFlex = motion(Flex)

export default function Presentation() {
    const size = 25;
    return (
        <Flex align="center" justify="space-between" w="100%" wrap={"wrap"}>
            <MotionStack
                initial="hidden"
                animate="visible"
                spacing={2}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
            >
                <HStack spacing={2}>
                    <MotionText
                        fontSize="2xl"
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
                    </MotionText>

                    <MotionText
                        fontSize="2xl"
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
                    </MotionText>
                </HStack>

                <MotionText
                    fontSize="8xl"
                    as="span"
                    fontWeight="bold"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { duration: 1.5, delay: 1.5 }
                        }
                    }}
                >
                    Edgar Augusto
                </MotionText>

                <MotionText
                    fontSize="2xl"
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
                </MotionText>
            </MotionStack>

            <Flex direction="column" justify="center" align="center" flex="1" position={"relative"}>
                <MotionText
                    textAlign="center"
                    fontFamily="monospace"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                >
                    <Text as="span" fontSize="6xl" fontWeight="bold">
                        &lt;
                    </Text>

                    <Text as="span" fontSize="8xl" fontWeight="light">
                        EA
                    </Text>

                    <Text as="span" fontSize="6xl" fontWeight="bold">
                        /&gt;
                    </Text>
                </MotionText>

                <MotionFlex
                    gap={4}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3, ease: "easeOut" }}
                    position={"absolute"}
                    bottom={-3}
                >
                    <Icon href="https://instagram.com/eded.dev">
                        <SiInstagram color={"#fff"} size={size} />
                    </Icon>

                    <Icon href="https://github.com/eded001">
                        <SiGithub color={"#fff"} size={size} />
                    </Icon>

                    <Icon href="https://www.linkedin.com/in/edgar-augusto/">
                        <SiLinkedin color={"#fff"} size={size} />
                    </Icon>
                </MotionFlex>
            </Flex>
        </Flex>
    );
}