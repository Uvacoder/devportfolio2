import {
  HStack,
  IconButton,
  Link,
  Spacer,
  Text,
  chakra,
} from "@chakra-ui/react";
import { Header } from "..";

export function NavBar() {
  return (
    <HStack py="2rem" w="full" maxW="5xl">
      <Text
        fontSize="42px"
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
      <HStack color="text.light" spacing="1.5rem">
        <Link href="#Experience">Experience</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </HStack>
    </HStack>
  );
}
