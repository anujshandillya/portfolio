import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import {
  NavBar,
  Me,
  About,
  Experience,
  Skills,
  Contact,
  Projects,
  CanvasLoader,
  Avatar
  } from "./components"

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <NavBar/>
          <Me />
        </div>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <CanvasLoader />
        </div>
      </div>
    </Router>
  )
}

export default App