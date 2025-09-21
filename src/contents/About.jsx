import Title from "@/components/Title";
import { Stack, Text, Box } from "@chakra-ui/react";

export default function About() {
    return (
        <Box>
            <Stack spacing={5} textAlign={"center"}>
                <Title>
                    A little bit of me
                </Title>

                <Text fontSize="xl" lineHeight="taller">
                    Curiosity drives me. I’m the kind of developer who sees challenges as puzzles waiting to be solved,
                    whether it’s building a sleek front-end interface or designing a robust back-end solution.
                    Every line of code is an opportunity to learn, innovate, and make an impact.

                    <br /><br />

                    Beyond coding, I’m passionate about creating experiences that connect people, simplify processes,
                    and spark meaningful interactions.
                </Text>

                <Text fontSize="xl" lineHeight="taller" fontStyle="italic">
                    Always learning, always experimenting, always aiming to turn ideas into reality.
                </Text>
            </Stack>
        </Box>
    );
}