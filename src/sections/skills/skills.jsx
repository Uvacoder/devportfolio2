import { Section } from "../../components";
import config from "../../config";
import { IconGrid } from "./styles";

function Skills() {
  return (
    <Section maxW="100%" id="skills">
      <IconGrid icons={config.skills} />
    </Section>
  );
}

export { Skills };
