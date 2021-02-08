import { useState } from "react";
import Lightbox from "react-image-lightbox";

import projectStyles from "../styles/project.module.scss";
import badgesStyles from "../styles/badges.module.scss";

interface IProject {
  name: string;
  img?: string;
  video?: string;
  categories: string;
  technologies: Array<string>;
  date: string;
  description: string;
  link?: string;
  repository?: string;
  credits?: string;
}

export default function Project({ project }: { project: IProject }) {
  const [expandImage, setExpandImage] = useState(false);

  return (
    <>
      {expandImage ? (
        <Lightbox mainSrc={project.img} onCloseRequest={() => setExpandImage(false)} />
      ) : null}

      <div className={projectStyles.project}>
        <h1>{project.name}</h1>
        {project.img ? (
          <img
            className={projectStyles.projectImg}
            src={project.img}
            alt={project.name}
            onClick={() => setExpandImage(true)}
          />
        ) : null}
        {project.video ? (
          <video controls>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
        <p>
          <strong>Categoria: </strong>
          {project.categories}
        </p>
        <p>
          <strong>Tecnologias: </strong>
          {project.technologies.map((technology) => (
            <div className={badgesStyles.badges} key={technology}>
              <span className={`${badgesStyles.badge} ${badgesStyles[technology]}`}>
                {technology}
              </span>
            </div>
          ))}
        </p>
        <p>
          <strong>Data: </strong>
          {project.date}
        </p>
        <p>
          <strong>Descrição</strong>: {project.description}
        </p>
        {project.link ? (
          <p>
            <strong>Link: </strong>
            <a href={project.link}>{project.link}</a>
          </p>
        ) : null}
        {project.repository ? (
          <p>
            <strong>Repositório: </strong>
            <a href={project.repository}>{project.repository}</a>
          </p>
        ) : null}
        {project.credits ? (
          <p>
            <strong>Créditos: </strong>
            {project.credits}
          </p>
        ) : null}
      </div>
    </>
  );
}
