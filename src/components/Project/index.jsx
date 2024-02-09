export default function Project(props) {
  return (
    <>
      <div>
        <h3>{props.project.title}</h3>
        <a href={props.project.github}>GitHub</a>
        <br/>
        <a href={props.project.deployed}>Deployed App</a>
      </div>
    </>
  );
}
