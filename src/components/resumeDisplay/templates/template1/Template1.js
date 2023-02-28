import React from "react";
import styles from "./Template1.module.css";

const Template1 = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperSection}>{props.data.summary}</div>
      <div className={styles.LowerSection}></div>
    </div>
  );
};

export default Template1;
