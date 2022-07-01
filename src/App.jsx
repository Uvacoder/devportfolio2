import { Page, Navigation } from "./components";
import { Home, Skills } from "./sections";
import { Image } from "@chakra-ui/react";

function App() {
  return (
    <Page>
      <Navigation />
      <Home />
      <Skills />
    </Page>
  );
}

export default App;
