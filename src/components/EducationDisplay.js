import React from "react";
import styles from "./EducationDisplay.module.css";

import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
function EducationDisplay(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div key={props.ind} className={styles.mainContainer}>
      <List
        sx={{ width: "90%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton
          onClick={handleClick}
          sx={{ width: "100%", padding: "0%" }}
        >
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText primary={props.data.name} />
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
              {props.data.score}
            </div>
          </List>
        </Collapse>
      </List>
      <Fab
        sx={{ alignSelf: "flex-end" }}
        size="small"
        color="#ebebeb"
        aria-label="add"
      >
        <DeleteIcon
          size="large"
          onClick={() => {
            props.setData((oldValues) => {
              return {
                ...oldValues,
                education: props.wholeData.education.filter(
                  (element) => element.name !== props.data.name
                ),
              };
            });
          }}
        />
      </Fab>
    </div>
  );
}

export default EducationDisplay;
