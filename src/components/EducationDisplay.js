import React from "react";
import styles from "./EducationDisplay.module.css";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
function EducationDisplay(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div key={props.ind} className={styles.mainContainer}>
      {/* <div>{props.data.name}</div>
      <div>{props.data.description}</div>
      <div>{props.data.result}</div> */}

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick} sx={{ width: "100%" }}>
          <ListItemText primary={props.data.name} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div className={styles.educationDisplayData}>
              Name: {props.data.name}
            </div>
            <div className={styles.educationDisplayData}>
              {props.data.description}
            </div>
            <div className={styles.educationDisplayData}>
              {props.data.result}
            </div>
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default EducationDisplay;
