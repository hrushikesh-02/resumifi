import React from "react";
import styles from "./Template1.module.css";

const Template1 = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperSection}>
        <div className={styles.upperLeftSection}>
          {props.data.name}
          <div className={styles.sub}>{props.data.summary}</div>
        </div>
        <div className={styles.upperRightSection}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.lowerSection}>
        <div className={styles.lowerLeftSection}></div>
        <div className={styles.lowerRightSection}></div>
      </div>
    </div>
  );
};

export default Template1;
