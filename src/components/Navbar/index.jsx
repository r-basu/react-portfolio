import "./style.css";

export default function Navbar(props) {
  return (
    <nav>
      <a
        className={`titles ${props.current ? "current" : ""}`}
        onClick={() => props.handleClick(props.id)}
      >
        {props.name}
      </a>
    </nav>
  );
}
