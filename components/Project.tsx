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
        <div className={projectStyles.info}>
          <strong>Categoria: </strong>
          {project.categories}
        </div>
        <div className={projectStyles.info}>
          <strong>Tecnologias: </strong>
          {project.technologies.map((technology) => (
            <div className={badgesStyles.badges} key={technology}>
              <span className={`${badgesStyles.badge} ${badgesStyles[technology]}`}>
                {technology}
              </span>
            </div>
          ))}
        </div>
        <div className={projectStyles.info}>
          <strong>Data: </strong>
          {project.date}
        </div>
        <div className={projectStyles.info}>
          <strong>Descrição</strong>: {project.description}
        </div>
        {project.link ? (
          <div className={projectStyles.info}>
            <strong>Link: </strong>
            <a href={project.link}>{project.link}</a>
          </div>
        ) : null}
        {project.repository ? (
          <div className={projectStyles.info}>
            <strong>Repositório: </strong>
            <a href={project.repository}>{project.repository}</a>
          </div>
        ) : null}
        {project.credits ? (
          <div className={projectStyles.info}>
            <strong>Créditos: </strong>
            {project.credits}
          </div>
        ) : null}
      </div>
    </>
  );
}
