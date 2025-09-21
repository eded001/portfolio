import { Text } from "@chakra-ui/react";

export default function Title({ children }) {
    return (
        <Text
            as={"h1"}
            fontSize={"4xl"}
            fontWeight={"bold"}
            textAlign={"center"}
        >
            {children}
        </Text>
    )
}