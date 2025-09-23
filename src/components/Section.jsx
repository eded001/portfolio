import { Stack } from "@chakra-ui/react";

export default function Section({ children, justfiy = "center", align = "center" }) {
    return (
        <Stack
            minHeight={"100dvh"}
            border={"1px solid"}
            justifyContent={justfiy}
            alignItems={align}
        >
            {children}
        </Stack>
    );
}