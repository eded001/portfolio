import Title from "@/components/Title";
import { Button, Grid, Text } from "@chakra-ui/react";

export default function ContactMe() {
    return (
        <Grid placeItems={"center"} gap={10}>
            <Title>
                Hey, let's do a job!
            </Title>
            <Text>
                I love exploring new opportunities and partnerships. If you have a project or a question, feel free to contact me.
            </Text>

            <Button as="a" href={"mailto:edgarams.profissional@gmail.com"}>Say hello</Button>
        </Grid>
    );
}