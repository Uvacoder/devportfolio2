import { chakra } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export function AltButton({ children, icon: Icon = false }) {
  const [isHovered, setIsHovered] = React.useState(false);

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
      w={{ base: "full", md: "auto" }}
      justifyContent="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && (
        <chakra.span mr="3" fontSize="18px">
          <motion.div animate={{ y: isHovered ? 3 : 0 }}>
            <Icon />
          </motion.div>
        </chakra.span>
      )}
      {children}
    </chakra.button>
  );
}

export function Button({ children, icon: Icon = false }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <chakra.button
      display="flex"
      alignItems="center"
      bg="blue.400"
      p=".8rem 1.3rem"
      rounded="lg"
      fontWeight="bold"
      fontSize="14px"
      w={{ base: "full", md: "auto" }}
      transition={"all 0.2s ease-in-out"}
      _hover={{ bg: "blue.300" }}
      justifyContent="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {Icon && (
        <chakra.span mr="3" fontSize="18px">
          <motion.div animate={{ x: isHovered ? -3 : 0 }}>
            <Icon />
          </motion.div>
        </chakra.span>
      )}
      {children}
    </chakra.button>
  );
}
