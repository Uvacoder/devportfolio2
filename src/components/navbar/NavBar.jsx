import {
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Header } from "..";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function NavBar() {
  return (
    <HStack py="2rem" w="full" maxW="5xl">
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
      <HStack color="text.light" spacing="1rem">
        <Link href="#Experience">Experience</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
        <Link fontSize="18px" p=".7rem" bg="whiteAlpha.100" rounded="lg">
          <FaGithub />
        </Link>
        <Link fontSize="18px" p=".7rem" bg="whiteAlpha.100" rounded="lg">
          <FaLinkedin />
        </Link>
        <Link fontSize="18px" p=".7rem" bg="whiteAlpha.100" rounded="lg">
          <FaTwitter />
        </Link>
      </HStack>
    </HStack>
  );
}
