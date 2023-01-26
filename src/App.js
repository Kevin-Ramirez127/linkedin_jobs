import { Logo } from "./Logo";
import { Hero } from "./Hero";
import { Header } from "./Header";
import { JobSearcher } from "./JobSearcher";
function App() {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Hero>
        <JobSearcher />
      </Hero>
    </>
  );
}

export default App;