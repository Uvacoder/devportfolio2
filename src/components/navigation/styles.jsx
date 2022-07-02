import { HStack, Link as ChakraLink, Heading } from "@chakra-ui/react";
import { SocialLinks } from "../../sections/home/SocialLinks";

export const Navbar = ({ offset, children }) => (
  <HStack
    backdropFilter="auto"
    backdropBlur={offset > 0 ? "8px" : "0px"}
    zIndex={9999}
    bg={offset > 0 ? "blackAlpha.400" : "transparent"}
    pos="fixed"
    transition="all 0.2s ease-in-out"
    justify="space-center"
    w="100%"
    p={4}
    borderBottom="1px solid"
    borderColor={offset > 0 ? "whiteAlpha.100" : "transparent"}
  >
    {children}
  </HStack>
);

export const Logo = () => (
  <HStack w="25%">
    <Heading>Logo</Heading>
  </HStack>
);

export const Links = ({ children }) => (
  <HStack
    w="75%"
    justify="center"
    fontSize="14px"
    letterSpacing=".02rem"
    spacing="2rem"
  >
    {children}
  </HStack>
);

export const Link = ({ link, id }) => (
  <ChakraLink
    key={link}
    href={`#${link}`}
    textTransform="capitalize"
    color={id === link ? "white" : "whiteAlpha.600"}
    transform={id === link ? "translateY(-2px)" : "translateY(0px)"}
  >
    {link}
  </ChakraLink>
);

export const Social = ({ links }) => (
  <HStack w="25%" justify="end">
    <SocialLinks links={links} />
  </HStack>
);
