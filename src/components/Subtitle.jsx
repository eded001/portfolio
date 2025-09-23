import { Text } from "@chakra-ui/react";

export default function Subtitle({ children }) {
    return (
        <Text
            as={"h2"}
            fontSize={"3xl"}
            fontWeight={"bolder"}
            textAlign={"center"}
            opacity={0.5}
        >
            {children}
        </Text>
    )
}