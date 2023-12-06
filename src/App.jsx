import { BrowserRouter as Router } from "react-router-dom";
import {
  NavBar,
  Me,
  About,
  Experience,
  Skills,
  Contact,
  Projects,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Me />
        </div>
        <div className="">
          <About />
          <Experience />
          <Skills />
          <Projects />
        </div>

        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
