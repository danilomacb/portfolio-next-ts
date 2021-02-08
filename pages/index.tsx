import mainStyles from "../styles/main.module.scss";
import SideBar from "../components/SideBar";
import projects from "../projects.json";
import Project from "../components/Project";

export default function Main() {
  return (
    <>
      <SideBar />
      <main id={mainStyles.container}>
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </main>
    </>
  );
}
