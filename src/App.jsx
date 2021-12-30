import { Hero, Experience, Projects, Tech } from "./sections";
import { Page, NavBar } from "./components";

function App() {
  return (
    <Page>
      <NavBar />
      <Hero />
      <Tech />
      <Experience />
      <Projects />
    </Page>
  );
}

export default App;
