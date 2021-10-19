import Intro from "./components/intro";
import "./app.scss";
import Contact from "./components/contact";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Projects from "./components/projects";
import Education from "./components/education";
import Admin from "./components/admin/index";
import ProjectInput from "./components/admin/projectInput";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact>
          <Intro />
          <Education />
          <Projects />
          <Contact />
        </Route>

        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/admin/projects">
          <ProjectInput />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
