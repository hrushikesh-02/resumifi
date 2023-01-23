import styles from "./InputElement.module.css";

import React from "react";

const InputElement = (props) => {
  let attributeName = props.attributeName;
  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>{props.attributeName}</div>
      <div className={styles.attributeInput}>
        <input
          type={props.attributeNumber}
          onChange={(e) => {
            props.setData((prev) => {
              prev[attributeName] = e.target.value;
              return { ...prev };
            });
          }}
          value={props.data}
        />
      </div>
    </div>
  );
};

export default InputElement;
