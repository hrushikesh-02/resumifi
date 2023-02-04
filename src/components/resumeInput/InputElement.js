import styles from "./InputElement.module.css";
import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
const InputElement = (props) => {
  let attributeName = props.attributeName;
  const [isTouched, setIsTouched] = useState(false);
  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>{props.attributeName}</div>
      <div className={styles.attributeInput}>
        <TextField
          id="outlined-basic"
          label={attributeName}
          variant="outlined"
          type={props.attributeNumber}
          value={props.data}
          onChange={(e) => {
            setIsTouched(true);
            props.setData((prev) => {
              prev[attributeName] = e.target.value;
              return { ...prev };
            });
          }}
          sx={{ width: "90%", zIndex: "0" }}
          error={isTouched && props.data.trim() === ""}
          helperText={
            props.data.trim() === ""
              ? `${props.attributeName} field is empty`
              : ""
          }
        />
      </div>
    </div>
  );
};

export default InputElement;
