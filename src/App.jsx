import { useState } from "react";
import Header from "./components/Header";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";

export default function App() {
  const [selectedTitle, setSelectedTitle] = useState(1);

  return (
    <>
      <Header setSelectedTitle={setSelectedTitle} />
      <div>{selectedTitle === 1 && <About />}</div>
      <div>{selectedTitle === 2 && <Portfolio />}</div>
      <div>{selectedTitle === 3 && <Contact />}</div>
      <div>{selectedTitle === 4 && <Resume />}</div>
    </>
  );
}
