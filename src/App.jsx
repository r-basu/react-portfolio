import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";

export default function App() {
  const [selectedTitle, setSelectedTitle] = useState("about");

  return (
    <>
      <Header selectedTitle={selectedTitle} />
      <About />
    </>
  );
}
