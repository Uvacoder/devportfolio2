import {
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  chakra,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuModal } from "./MenuModal";
import { FaGithub, FaLinkedin, FaTwitter, FaBars } from "react-icons/fa";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack pt="1rem" pb={[0, 0, "6rem"]} w="full" maxW="5xl">
      <Text
        fontSize="32px"
        fontWeight="black"
        display="flex"
        letterSpacing="-5.5px"
        color="white"
      >
        TT
        <Text pl="0.3rem" color="pink.500">
          .
        </Text>
      </Text>

      <Spacer />
      <IconButton
        onClick={onOpen}
        display={["flex", "flex", "none"]}
        icon={<FaBars />}
      />
      <MenuModal isOpen={isOpen} onClose={onClose} />

      <HStack
        display={["none", "none", "flex"]}
        color="text.light"
        spacing="1rem"
      >
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link
          fontSize="18px"
          p=".7rem"
          bg="whiteAlpha.100"
          rounded="lg"
          color="purple.400"
        >
          <FaGithub />
        </Link>
        <Link
          fontSize="18px"
          p=".7rem"
          bg="whiteAlpha.100"
          rounded="lg"
          color="blue.400"
        >
          <FaLinkedin />
        </Link>
        <Link
          fontSize="18px"
          p=".7rem"
          bg="whiteAlpha.100"
          rounded="lg"
          color="blue.500"
        >
          <FaTwitter />
        </Link>
      </HStack>
    </HStack>
  );
}
