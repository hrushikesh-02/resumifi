import React from "react";
import styles from "./Skills.module.css";
export default function Skills({ data }) {
  return (
    <div className={styles.skillcomponent} style={{ color: `${data.color2}` }}>
      <i>Skills:</i>
      <div className={styles.skillfield} style={{ color: `${data.color}` }}>
        {data.skill.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </div>
    </div>
  );
}
