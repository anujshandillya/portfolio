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
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.mode);
  console.log(theme);
  return (
    <Router>
      <div className={`z-0 ${theme==='dark'?"bg-primary":"bg-[#F5F5F5]"}`}>
        <div className={`${theme==='dark'?"bg-hero-pattern bg-cover":"bg-hero-pattern2 bg-cover"}  bg-no-repeat bg-center`}>
          <NavBar />
          <Me />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Projects />
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
