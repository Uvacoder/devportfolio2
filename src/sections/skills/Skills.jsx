import React from "react";
import { Section } from "../../components";
import config from "../../config";
import { IconButton, HStack } from "@chakra-ui/react";

const SkillIcon = ({ icon: Icon, color }) => (
  <IconButton icon={<Icon />} fontSize="4xl" variant="ghost" color={color} />
);

function Skills() {
  return (
    <Section maxW="100%">
      <HStack spacing={8}>
        {config.skills.map((skill) => (
          <SkillIcon key={skill.name} icon={skill.icon} color={skill.color} />
        ))}
      </HStack>
    </Section>
  );
}

export { Skills };
