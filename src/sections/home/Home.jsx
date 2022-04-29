import { Heading, Text } from "@chakra-ui/react";
import config from "../../config";

import { Section } from "../../components";
import { ProfilePhoto } from "./ProfilePhoto";
import { SocialLinks } from "./SocialLinks";

function Home() {
  return (
    <Section h="75vh" maxW="100%">
      <ProfilePhoto src={config.photo} />
      <Heading>{config.name}</Heading>
      <Text>{config.title}</Text>
      <SocialLinks links={config.socialLinks} />
    </Section>
  );
}

export { Home };
