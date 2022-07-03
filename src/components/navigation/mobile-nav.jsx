import { FadeDown } from "../animations";
import config from "../../config";
import { useScrollController } from "../../hooks/useScrollController";
import { Navbar, Logo, Link, Links, Social } from "./styles";
import { Button } from "@chakra-ui/react";

export function MobileNav() {
  const { offset, id } = useScrollController();

  return (
    <FadeDown delay={0.2}>
      <Navbar offset={offset}>
        <Logo />
        <Button>M</Button>
      </Navbar>
    </FadeDown>
  );
}
