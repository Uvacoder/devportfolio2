import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeaderIcon({ icon: Icon, color }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Center
      ringColor={`${color}.200`}
      bg={`${color}.400`}
      color={`${color}.900`}
      rounded="full"
      fontSize="2xl"
      ring="4px"
      w="4rem"
      h="4rem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          y: isHovered ? -3 : 0,
        }}
      >
        <Icon />
      </motion.div>
    </Center>
  );
}
