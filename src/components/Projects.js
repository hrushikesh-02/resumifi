import React from "react";

import styles from "./Project.module.css";
export default function Projects({ data }) {
  return (
    <div className={styles.ProjectComponent}>
      {/* <u> Projects : </u> */}
      Projects:
      {data.projects.map((project) => {
        return (
          <div className={styles.ProjectField} key={project.name}>
            <h2>{project.name}</h2>
            <span> link : {project.link}</span>
            <span>Description : {project.description}</span>
          </div>
        );
      })}
    </div>
  );
}
