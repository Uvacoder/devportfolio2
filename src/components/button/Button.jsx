import { chakra } from "@chakra-ui/react";

export function AltButton({ children, icon: Icon = false }) {
  return (
    <chakra.button
      display="flex"
      alignItems="center"
      bg="whiteAlpha.100"
      p=".8rem 1.3rem"
      color="gray.300"
      rounded="lg"
      fontWeight="bold"
      fontSize="14px"
      transition={"all 0.2s ease-in-out"}
      _hover={{ bg: "gray.700" }}
      _highlighted={5}
      shadow="md"
    >
      {Icon && (
        <chakra.span mr="3" fontSize="18px">
          <Icon />
        </chakra.span>
      )}
      {children}
    </chakra.button>
  );
}

export function Button({ children, icon: Icon = false }) {
  return (
    <chakra.button
      display="flex"
      alignItems="center"
      bg="blue.400"
      p=".8rem 1.3rem"
      rounded="lg"
      fontWeight="bold"
      fontSize="14px"
      transition={"all 0.2s ease-in-out"}
      _hover={{ bg: "blue.300" }}
    >
      {Icon && (
        <chakra.span mr="3" fontSize="18px">
          <Icon />
        </chakra.span>
      )}
      {children}
    </chakra.button>
  );
}
