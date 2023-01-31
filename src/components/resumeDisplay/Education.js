import React, { useEffect } from "react";

import styles from "./Education.module.css";

export default function Education({ data }) {

  return (
    <div className={styles.EduComponent} style={{ color: `${data.color2}` }}>
<<<<<<< HEAD:src/components/Education.js
       {/* <div> Education : </div>;    */}

       <i>Education:</i>
      {data.education.map((edu,ind) => {
=======
      {/* <div> Education : </div>;    */}
      Education:
      {data.education.map((edu, ind) => {
>>>>>>> 58e6516e90f4853fd370b04e0654bb1a0c8c72ad:src/components/resumeDisplay/Education.js
        return (
          <div
            className={styles.EducationField}
            key={ind}
            style={{ color: `${data.color}` }}
          >
            <h2>{edu.name}</h2>
            <span>score:{edu.score}</span>
            <span>{edu.description}</span>
          </div>
        );
      })}
    </div>
  );
}
