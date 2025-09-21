import { Center } from "@chakra-ui/react";

export default function Section({ children }) {
    return (
        <Center
            minHeight={"100dvh"}
            border={"1px solid"}
        >
            {children}
        </Center>
    );
}