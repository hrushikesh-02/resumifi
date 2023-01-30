import React from "react";

import styles from "./Education.module.css";

export default function Education({ data }) {
  return (
    <div className={styles.EduComponent}>
       {/* <div> Education : </div>;    */}

       Education:
      {data.education.map((edu) => {
        return (
          <div className={styles.EducationField} key={edu.score}>
            <h2>{edu.name}</h2>
            <span>{edu.score}</span>
            <span>{edu.description}</span>
          </div>
        );
      })}
    </div>
  );
}
