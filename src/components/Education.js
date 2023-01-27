import React from "react";

import styles from "./Education.module.css";

export default function Education({ data }) {
  return (
    <div className="EduComponent">
      {data.education.map((edu) => {
        return (
          <div className={styles.EducationField}>
            <h2>{edu.name}</h2>
            <span> Aggregate: {edu.result}</span>
            <span>{edu.description}</span>
          </div>
        );
      })}
    </div>
  );
}
