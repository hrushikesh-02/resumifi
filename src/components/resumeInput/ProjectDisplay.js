import React from "react";
import styles from "./ProjectDisplay.module.css";

import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Fab from "@mui/material/Fab";
function ProjectDisplay(props) {
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
          sx={{ width: "98%", borderRadius: "5px" }}
        >
          {open ? <ExpandLess /> : <ExpandMore />}
          <ListItemText
            sx={{ height: "100%", padding: "0" }}
            primary={props.data.name}
          />
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <div className={styles.educationDisplayData}>
              Name: {props.data.name}
            </div>
            <div className={styles.educationDisplayData}>
              Description: {props.data.description}
            </div>
            <div className={styles.educationDisplayData}>
              Link: {props.data.link}
            </div>
          </List>
        </Collapse>
      </List>
      <Fab
        size="small"
        color="#ebebeb"
        aria-label="add"
        sx={{ zIndex: "0" }}
        onClick={() => {
          props.setData((oldValues) => {
            return {
              ...oldValues,
              projects: props.wholeData.projects.filter(
                (element) => element.name !== props.data.name
              ),
            };
          });
        }}
      >
        <DeleteIcon size="small" />
      </Fab>
    </div>
  );
}

export default ProjectDisplay;
