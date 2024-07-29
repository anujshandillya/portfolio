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
import { Stars } from "./components/canvas";

const App = () => {
  return (
    <Router>
      <div className="z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Me />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Projects />
          {/* <Stars /> */}
        </div>
        <div className="relative z-0">
          <Skills />
          <Contact />
          <Stars />
        </div>
      </div>
    </Router>
  );
};

export default App;
