import styles from "./ProjectInput.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import ProjectDisplay from "./ProjectDisplay";

function ProjectInput(props) {
  let attributeName = props.attributeName;
  const [tempObj, setTempObj] = useState({
    name: "",
    description: "",
    link: "",
  });

  const [isTouched, setIsTouched] = useState(false);

  const onClickHandler = () => {
    console.log("hi");
    if (
      tempObj.name.trim() === "" ||
      tempObj.description.trim() === "" ||
      tempObj.link.trim() === ""
    ) {
      setIsTouched(true);
      return;
    } else {
      props.setData((prev) => {
        return { ...prev, projects: [...prev[attributeName]].concat(tempObj) };
      });
      setTempObj(() => {
        return { name: "", description: "", link: "" };
      });
    }
  };

  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>
        <b>{props.attributeName}</b>
      </div>
      <div className={styles.attributeInput}>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Project-Name"
            variant="outlined"
            type={props.attributeNumber}
            onChange={(e) => {
              setTempObj({ ...tempObj, name: e.target.value });
            }}
            sx={{ width: "92%" }}
            inputProps={{ maxLength: 50 }}
            value={tempObj.name}
            error={isTouched && tempObj.name.trim() === ""}
            helperText={
              isTouched && tempObj.name.trim() === ""
                ? "Name field is empty"
                : ""
            }
          />
        </div>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setTempObj({ ...tempObj, description: e.target.value });
            }}
            sx={{ width: "92%" }}
            value={tempObj.description}
            error={isTouched && tempObj.description.trim() === ""}
            helperText={
              isTouched && tempObj.description.trim() === ""
                ? "Name field is empty"
                : ""
            }
          />
        </div>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Link"
            variant="outlined"
            onChange={(e) => {
              setTempObj({ ...tempObj, link: e.target.value });
            }}
            value={tempObj.link}
            sx={{ width: "92%" }}
            error={isTouched && tempObj.link.trim() === ""}
            helperText={
              isTouched && tempObj.link.trim() === ""
                ? "Name field is empty"
                : ""
            }
          />
        </div>
        <div className={styles.endHolder} onClick={onClickHandler}>
          <Fab size="medium" color="secondary" aria-label="add">
            <AddIcon fontSize="medium" />
          </Fab>
        </div>
        {props.data.projects.map((ele, ind) => {
          return (
            <ProjectDisplay
              key={ind}
              data={ele}
              wholeData={props.data} // Alias data -> wholeData
              setData={props.setData}
            ></ProjectDisplay>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectInput;
