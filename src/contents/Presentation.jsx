import { Stack, Text, Wrap } from "@chakra-ui/react";

export default function Presentation() {
    return (
        <Wrap align={"center"} gap={20}>
            <Stack>
                <Text fontSize={"2xl"}>Hello, my name is</Text>
                <Text fontSize={"8xl"} as={"span"}>Edgar Souza</Text>
                <Text fontSize={"2xl"}>Dev Full Stack | Dev Mobile | Aspiring Tech Lead</Text>
            </Stack>

            <Stack>
                <Text fontSize="7xl" fontWeight="light">
                    <Text as="span" fontWeight="bold" >&lt;</Text>
                    Dev Full Stack
                    <Text as="span" fontWeight="bold" >/&gt;</Text>
                </Text>
            </Stack>
        </Wrap>
    );
}