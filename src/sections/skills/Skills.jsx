import React, { useState } from "react";
import { Section } from "../../components";
import config from "../../config";
import { IconButton, HStack, Tooltip } from "@chakra-ui/react";
import { ScaleUp } from "../../components/animations";

const Icon = ({ icon: Icon, color, label }) => {
  return (
    <Tooltip
      label={label}
      aria-label="A tooltip"
      bg="primary.button"
      color="white"
    >
      <IconButton
        icon={<Icon />}
        fontSize="4xl"
        p="1rem"
        variant="ghost"
        bg="none"
        _hover={{ transform: "translateY(-4px)", color: color }}
        color="primary.text"
        cursor="default"
        transform="translateY(0)"
      />
    </Tooltip>
  );
};

function Skills() {
  return (
    <Section maxW="100%">
      <HStack spacing={10}>
        {config.skills.map((skill, i) => (
          <ScaleUp delay={i * 0.12}>
            <Icon
              key={skill.name}
              label={skill.label}
              icon={skill.icon}
              color={skill.color}
            />
          </ScaleUp>
        ))}
      </HStack>
    </Section>
  );
}

export { Skills };
