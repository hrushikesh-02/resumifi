import React from "react";

import styles from "./Education.module.css";

export default function Education({ data }) {
  return (
    <div className={styles.EduComponent} style={{ color: `${data.color2}` }}>
       {/* <div> Education : </div>;    */}

       Education:
      {data.education.map((edu,ind) => {
        return (
          <div className={styles.EducationField} key={ind} style={{ color: `${data.color}` }}>
            <h2>{edu.name}</h2>
            <span>{edu.score}</span>
            <span>{edu.description}</span>
          </div>
        );
      })}
    </div>
  );
}
