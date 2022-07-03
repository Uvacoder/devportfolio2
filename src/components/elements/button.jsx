import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ children, ...props }) => (
  <ChakraButton
    rounded="full"
    p=" 1rem "
    bg={props.bg || "#1f2223"}
    color="white"
    {...props}
    _hover={{ opacity: 0.8, transform: "translateY(-2px)" }}
  >
    {children}
  </ChakraButton>
);
