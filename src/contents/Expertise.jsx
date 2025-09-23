import { Box, Card } from "@chakra-ui/react";

import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

export default function Expertise() {
    return (
        <Box>
            <Title>My Expertise</Title>
            <Subtitle>Areas where I excel and can help bring your ideas to life</Subtitle>

            <Stack>
                <Card.root></Card.root>
            </Stack>
        </Box>
    );
}