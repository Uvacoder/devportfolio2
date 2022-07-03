import { FadeDown } from "../animations";
import config from "../../config";
import { useScrollController } from "../../hooks/useScrollController";
import { Navbar, Logo, Link, Links, Social } from "./styles";

const links = ["skills", "experience", "projects", "contact"];

export function DesktopNav() {
  const { offset, id } = useScrollController();

  return (
    <FadeDown delay={0.2}>
      <Navbar offset={offset}>
        <Logo />
        <Links>
          {links.map((l) => (
            <Link link={l} key={l} id={id} />
          ))}
        </Links>
        <Social links={config.socialLinks} />
      </Navbar>
    </FadeDown>
  );
}
