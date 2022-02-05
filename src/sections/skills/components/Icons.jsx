import React from "react";
import { Wrap, chakra, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Icon = ({ icon: Icon, label, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div animate={{ y: isHovered ? -7 : 0 }}>
      <chakra.div
        _hover={{ color: color }}
        justifyContent="center"
        alignItems="center"
        color={color}
        flexDir="column"
        display="flex"
        rounded="lg"
        bg="#162032"
        w="7rem"
        h="7rem"
        transition={"all 0.2s ease-in-out"}
        fontSize={isHovered ? "2rem" : "1.5rem"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Icon key={label} />
        <Text
          pt="1rem"
          fontSize="sm"
          fontWeight={isHovered ? "bold" : "normal"}
          transition={"all 0.2s ease-in-out"}
        >
          {label}
        </Text>
      </chakra.div>
    </motion.div>
  );
};

export function Icons({ icons }) {
  return (
    <Wrap
      justify="space-between"
      fontSize="32px"
      spacing="1rem"
      display="flex"
      pt="1rem"
      w="100%"
    >
      {icons.map((i) => (
        <Icon label={i.label} color={i.color} icon={i.icon} />
      ))}
    </Wrap>
  );
}
