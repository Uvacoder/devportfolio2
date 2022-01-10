import { Hero, Experience, Projects, Tech, Skills } from "./sections";
import { Page, NavBar } from "./components";

function App() {
  return (
    <Page>
      <NavBar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </Page>
  );
}

export default App;
