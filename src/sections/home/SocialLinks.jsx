import { HStack, IconButton } from "@chakra-ui/react";

function SocialLink({ icon: Icon, url, color }) {
  return (
    <IconButton
      icon={<Icon />}
      as="a"
      href={url}
      target="_blank"
      color={color}
      bg="transparent"
      fontSize="xl"
    />
  );
}

function SocialLinks({ links = [] }) {
  return (
    <HStack spacing={2}>
      {links.map((link) => (
        <SocialLink key={link.url} {...link} />
      ))}
    </HStack>
  );
}

export { SocialLinks };
