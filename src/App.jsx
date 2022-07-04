import { Page, Navigation } from "./components";
import { Home, Skills, Experience, Projects } from "./sections";
import { useState } from "react";

function App() {
  return (
    <Page>
      <Navigation />
      <Home />
      <Skills />
      <Experience />
      <Projects />
    </Page>
  );
}

export default App;
