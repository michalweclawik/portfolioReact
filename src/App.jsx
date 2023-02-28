import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./componenets/navbar/Navbar";
import ProjectDetails from "./componenets/projectDetails/ProjectDetails";
import Home from "./container/Home";
import ProjectList from "./container/ProjectList";
import { projects } from "./data/projects";

function App() {
  console.log(projects);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route
            path="/projects"
            element={<ProjectList projects={projects} />}
          />
          <Route
            path="/projects/:id"
            element={<ProjectDetails projects={projects} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
