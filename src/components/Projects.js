import React from 'react'

import styles from "./Project.module.css";
export default function Projects({data}) {
  return (
    <div className={styles.ProjectComponent}>
        {data.projects.map((project) => {
        return (
          <div className={styles.ProjectField}>
            <h2>{project.name}</h2>
            <span> {project.link}</span>
            <span>{project.description}</span>
          </div>
        );
      })}

    </div>
  )
}
