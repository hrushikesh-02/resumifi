import React from "react";

import styles from "./Project.module.css";
export default function Project({ data }) {
  return (
    <div className={styles.ProjectComponent} style={{ color: `${data.color2}` }}>
      {/* <u> Projects : </u> */}
      <i>Projects:</i>
      {data.projects.map((project) => {
        return (
          <div className={styles.ProjectField} key={project.name} style={{ color: `${data.color}` }}>
            <h2>{project.name}</h2>
            <span> link : <a href={project.link}>{project.name}</a></span>
            <span>Description : {project.description}</span>
          </div>
        );
      })}
    </div>
  );
}
