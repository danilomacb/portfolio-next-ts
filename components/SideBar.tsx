import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import sidebarStyles from "../styles/sidebar.module.scss";
import projectStyles from "../styles/project.module.scss";
import projects from "../projects.json";
import Profile from "./Profile";
import Socials from "./Socials";

export default function SideBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  let nav: HTMLElement;

  function showMenu() {
    nav.style.display === "block" ? (nav.style.display = "none") : (nav.style.display = "block");
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  }

  function scrollPage(i: number) {
    const projectElements = document.getElementsByClassName(projectStyles.project);

    if (
      getComputedStyle(document.getElementById(sidebarStyles.menuButton)!, null).display === "block"
    ) {
      nav.style.display = "none";
      setMenuOpened(false);
    }

    projectElements[i].scrollIntoView();
  }

  return (
    <>
      <button id={sidebarStyles.menuButton} aria-label="menu button" onClick={showMenu}>
        {menuOpened ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav id={sidebarStyles.sideBar} ref={(el) => (nav = el!)}>
        <Profile />

        <Socials />

        <h2>Meus Projetos</h2>
        <ul id={sidebarStyles.projects}>
          {projects.map((project, i) => (
            <button key={project.name} aria-label={project.name} onClick={() => scrollPage(i)}>
              {project.name}
            </button>
          ))}
        </ul>
      </nav>
    </>
  );
}
