import React, { useState } from "react";
import { projectData } from "../../data";
import Image from "next/image";
import styles from "./Projects.module.css";
import { composeClasses } from "../Utils/Utils";

const Projects = () => {
  const projects = projectData.map((project, i) => {
    return (
      <div key={i} className={composeClasses(styles.projects)}>
        <span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <Image
              className={styles.img}
              height={250}
              width={520}
              src={project.image}
            />
            <div className={styles.overlay}>
              <p className={styles.hoverText}>{project.name}</p>
            </div>
          </a>
        </span>
      </div>
    );
  });
  return (
    <section className={styles.projectContainer} id="projects">
      <div className={styles.glass}>
        <h1>Projects</h1>
        <div className={styles.projectCard}>{projects}</div>
      </div>
    </section>
  );
};

export default Projects;
