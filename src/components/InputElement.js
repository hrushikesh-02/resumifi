import styles from "./InputElement.module.css";
import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const InputElement = (props) => {
  let attributeName = props.attributeName;
  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>{props.attributeName}:</div>
      <div className={styles.attributeInput}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%", padding: "0" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              "& > :not(style)": { padding: "0" },
            }}
            label={props.attributeName}
            id="filled-basic"
            variant="filled"
            value={props.data}
            onChange={(e) => {
              props.setData((prev) => {
                prev[attributeName] = e.target.value;
                return { ...prev };
              });
            }}
          />
        </Box>
      </div>
    </div>
  );
};

export default InputElement;
