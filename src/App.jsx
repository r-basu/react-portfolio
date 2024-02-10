import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import project1 from "./assets/project1.jpg"
import project2 from "./assets/project2.jpg"
import project3 from "./assets/project3.jpg"
import project4 from "./assets/project4.jpg"
import project5 from "./assets/project5.jpg"
import project6 from "./assets/project6.jpg"

export default function App() {
  const [selectedTitle, setSelectedTitle] = useState(1);

  const projects = [
    {
      title: "Project 1",
      image: project1,
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 2",
      image: project2,
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 3",
      image: project3,
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 4",
      image: project4,
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 5",
      image: project5,
      github: "https://www.google.com",
      deployed: "https://www.duckduckgo.com",
    },
    {
      title: "Project 6",
      image: project6,
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
      <br/>
      <Footer/>
    </>
  );
}
