import Navbar from "../Navbar";
import { useState } from "react";

export default function Header({ setSelectedTitle }) {
  const [titles, setTitles] = useState([
    {
      id: 1,
      name: "About Me",
      active: true,
    },
    {
      id: 2,
      name: "Portfolio",
      active: false,
    },
    {
      id: 3,
      name: "Contact",
      active: false,
    },
    {
      id: 4,
      name: "Resume",
      active: false,
    },
  ]);

  const setActive = (id) => {
    const newTitles = titles.map((title) => {
      if (title.id === id) {
        return { ...title, current: true };
      } else {
        return { ...title, current: false };
      }
    });
    setTitles(newTitles);
    setSelectedTitle(id);
  };

  return (
    <header>
      <h1>Rahul Basu</h1>
      <div>
        {titles.map((title) => (
          <Navbar
            key={title.id}
            id={title.id}
            name={title.name}
            current={title.current}
            handleClick={setActive}
          />
        ))}
      </div>
    </header>
  );
}
