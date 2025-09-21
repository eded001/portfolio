import { Circle } from "@chakra-ui/react";

export default function Icon({ children, href, bottom, bg }) {
    const sizeIcon = "3rem";

    return (
        <Circle
            as={"a"}
            target={"_blank"}
            position={"fixed"}
            right={"10px"}
            w={sizeIcon}
            h={sizeIcon}

            href={href}
            bottom={bottom}
            bg={bg}
        >
            {children}
        </Circle>
    );
}