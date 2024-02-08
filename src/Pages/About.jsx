import profilePicture from "../assets/profilepicture.jpg";

export default function About() {
  return (
    <>
      <h2>About Me</h2>
      <img
        src={profilePicture}
        alt="Profile Picture"
        height="200px"
        width="250px"
      />
      <p>
        Hi! Welcome to my portfolio. I have always been immersed by technology
        and am currently working on being a proficient full stack developer!
      </p>
    </>
  );
}
