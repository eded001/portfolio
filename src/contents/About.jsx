import Title from "@/components/Title";
import { Stack, Text, Box } from "@chakra-ui/react";

export default function About() {
    return (
        <Box>
            <Stack spacing={5} textAlign={"center"}>
                <Title>A little bit of me</Title>

                <Text fontSize="xl" lineHeight="taller">
                    I'm a versatile developer with strong expertise in JavaScript, experienced in front-end, back-end, and mobile development. I enjoy building full-stack solutions and automating workflows. Passionate about solving real-world problems, I continuously explore new technologies and methodologies.
                </Text>

                <Text fontSize="xl" lineHeight="taller">
                    Outside of work, I’m an artist and writer, always seeking ways to grow, challenge myself, and enjoy life. Let’s create impactful solutions together!
                </Text>

                <Text fontSize="xl" lineHeight="taller" fontStyle="italic">
                    Always learning, always experimenting, always aiming to turn ideas into reality.
                </Text>
            </Stack>
        </Box>
    );
}