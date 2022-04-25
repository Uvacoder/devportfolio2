import { HStack, Link, Heading } from "@chakra-ui/react";

const SECTIONS = ["skills", "experience", "projects", "contact"];

function Navigation() {
  return (
    <HStack justify="space-between" w="100%" maxW="7xl" p={5}>
      <Heading>Logo</Heading>
      <HStack>
        {SECTIONS.map((section) => (
          <Link key={section} href={`#${section}`} textTransform="capitalize">
            {section}
          </Link>
        ))}
      </HStack>
    </HStack>
  );
}

export { Navigation };
