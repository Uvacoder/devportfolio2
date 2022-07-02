import { Page, Navigation } from "./components";
import { Home, Skills, Experience } from "./sections";
import { useState } from "react";

function App() {
  return (
    <Page>
      <Navigation />
      <Home />
      <Skills />
      <Experience />
    </Page>
  );
}

export default App;
