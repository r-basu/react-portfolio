import { useState } from "react";
import Header from "./components/Header";
import About from "./Pages/About";
import Project from "./components/Project";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

export default function App() {
  const [selectedTitle, setSelectedTitle] = useState(1);

  const projects = [
    {
      title: "Project 1",
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 2",
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 3",
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 4",
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 5",
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 6",
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
  ];

  return (
    <>
      <Header setSelectedTitle={setSelectedTitle} />
      {selectedTitle === 1 && <About />}
      {selectedTitle === 2 && (
        <div>
          {projects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
      )}
      {selectedTitle === 3 && <Contact />}
      {selectedTitle === 4 && <Resume />}
    </>
  );
}
