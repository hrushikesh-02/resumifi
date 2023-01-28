import styles from "./InputElement.module.css";
import React from "react";
import TextField from "@mui/material/TextField";

const InputElement = (props) => {
  let attributeName = props.attributeName;
  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>{props.attributeName}</div>
      <div className={styles.attributeInput}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          type={props.attributeNumber}
          value={props.data}
          onChange={(e) => {
            props.setData((prev) => {
              prev[attributeName] = e.target.value;
              return { ...prev };
            });
          }}
          sx={{ width: "90%" }}
        />
      </div>
    </div>
  );
};

export default InputElement;
