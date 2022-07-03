import { IconButton, Tooltip, SimpleGrid } from "@chakra-ui/react";
import { ScaleUp } from "../../components/animations";

export const Icon = ({ icon: Icon, color, label }) => {
  return (
    <Tooltip
      label={label}
      color="white"
      bg="primary.button"
      aria-label="A tooltip"
    >
      <IconButton
        icon={<Icon />}
        w="100%"
        bg="none"
        fontSize="4xl"
        display="flex"
        justifyContent="center"
        alignItems="center"
        variant="ghost"
        color="primary.text"
        cursor="default"
        transform="translateY(0)"
        _hover={{ transform: "translateY(-4px)", color: color }}
      />
    </Tooltip>
  );
};

export const IconGrid = ({ icons }) => {
  return (
    <SimpleGrid columns={[4, 8]} w="100%" spacingY="2rem" maxW="3xl">
      {icons.map((icon, i) => (
        <ScaleUp delay={i * 0.12}>
          <Icon
            key={icon.label}
            icon={icon.icon}
            label={icon.label}
            color={icon.color}
          />
        </ScaleUp>
      ))}
    </SimpleGrid>
  );
};
