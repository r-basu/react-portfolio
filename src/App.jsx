import { useState } from "react";
import Header from "./components/Header";
import About from "./Pages/About";

export default function App() {
  const [selectedTitle, setSelectedTitle] = useState(1);

  return (
    <>
      <Header setSelectedTitle={setSelectedTitle} />
      <div>{selectedTitle === 1 && <About />}</div>
    </>
  );
}
