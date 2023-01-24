import React from "react";
import styles from "./Customizer.module.css";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

function Customizer() {
  return (
    <div className={styles.buttonHolder}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>

      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Customizer;
