import React from "react";
import Intro from "./components/intro";
import "./app.scss";
import Contact from "./components/contact";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Projects from "./components/projects";
import Education from "./components/education";
import Admin from "./components/admin/index";
import ProjectInput from "./components/admin/projectInput";
import axios from "axios";

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("/admin")
      .then((res) => setData(res.result))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <BrowserRouter>
      <div>
        <Route path="/portfolio" exact>
          {data?.length !== 0 && <Intro data={data} />}
          <Education />
          <Projects />
          <Contact />
        </Route>

        <Route path="/" exact>
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
