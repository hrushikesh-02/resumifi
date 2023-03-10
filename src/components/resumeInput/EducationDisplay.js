import React, { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div key={props.ind} className={`${styles.mainContainer} group`}>
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
          <List
            component="div"
            disablePadding
            className={styles.dropDownParent}
          >
            <div className={styles.educationDisplayData}>
              Name: {props.data.name}
            </div>
            <div className={styles.educationDisplayData}>
              Description: {props.data.description}
            </div>
            <div className={styles.educationDisplayData}>
              Score: {props.data.score}
            </div>
          </List>
        </Collapse>
      </List>
      <Fab
        size="small"
        color="#ebebeb"
        aria-label="add"
        sx={{ zIndex: "0" }}
        className="hidden group-hover:block bg-red-900"
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
      >
        <DeleteIcon size="large" />
      </Fab>
    </div>
  );
}

export default EducationDisplay;
