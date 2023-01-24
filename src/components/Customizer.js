import React from "react";
import styles from "./Customizer.module.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function Customizer() {
  return (
    <div className={styles.buttonHolder}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Customizer;
