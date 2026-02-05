import Icon from "@/components/Icon";
import { Stack } from "@chakra-ui/react";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";

export default function FloatingButtons() {
    return (
        <Stack>
            <Icon
                href="https://instagram.com/eded.dev"
                bg="#833ab4"
            >
                <SiInstagram size={25} />
            </Icon>

            <Icon
                href="https://github.com/eded001"
                bg="#333"
            >
                <SiGithub size={25} />
            </Icon>

            <Icon
                href={"https://www.linkedin.com/in/edgar-augusto/"}
                bg="#0a66c2"
            >
                <SiLinkedin size={25} />
            </Icon>
        </Stack>
    )
}