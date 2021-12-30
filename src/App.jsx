import { Hero, Experience, Projects, Tech } from "./sections";
import { Page } from "./components";

function App() {
  return (
    <Page>
      <Hero />
      <Tech />
      <Experience />
      <Projects />
    </Page>
  );
}

export default App;
