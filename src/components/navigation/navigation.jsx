import { useBreakpointValue } from "@chakra-ui/react";
import { MobileNav } from "./mobile-nav";
import { DesktopNav } from "./desktop-nav";

const links = ["skills", "experience", "projects", "contact"];

function Navigation() {
  const component = useBreakpointValue({
    base: <MobileNav />,
    md: <DesktopNav />,
  });

  return <>{component}</>;
}

export { Navigation };
