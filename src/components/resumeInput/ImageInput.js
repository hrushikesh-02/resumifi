import React, { useState, useRef } from "react";
import styles from "./ImageInput.module.css";
import Button from "@mui/material/Button";
function ImageInput() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageInputWrapper}>
        <Button variant="contained" component="label">
          Upload
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
      <div className={styles.imageOutputWrapper}></div>
    </div>
  );
}

export default ImageInput;
