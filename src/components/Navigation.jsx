import { HStack, Link, Heading } from "@chakra-ui/react";
import { FadeDown } from "./animations";
import { SocialLinks } from "../sections/home/SocialLinks";
import config from "../config";

const SECTIONS = ["skills", "experience", "projects", "contact"];

function Navigation() {
  return (
    <FadeDown delay={0.2}>
      <HStack
        justify="space-center"
        w="100%"
        p={4}
        borderBottom="1px solid"
        borderColor="whiteAlpha.100"
      >
        <HStack w="25%">
          <Heading w="25%">Logo</Heading>
        </HStack>
        <HStack
          w="75%"
          justify="center"
          fontSize="14px"
          letterSpacing=".02rem"
          spacing="2rem"
        >
          {SECTIONS.map((section) => (
            <Link key={section} href={`#${section}`} textTransform="capitalize">
              {section}
            </Link>
          ))}
        </HStack>
        <HStack w="25%">
          <SocialLinks links={config.socialLinks} />
        </HStack>
      </HStack>
    </FadeDown>
  );
}

export { Navigation };
