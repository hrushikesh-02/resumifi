import styles from "./EducationInput.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EducationDisplay from "./EducationDisplay";

function EducationInput(props) {
  let attributeName = props.attributeName;
  const [tempObj, setTempObj] = useState({
    name: "",
    description: "",
    score: "",
  });

  const onClickEducationHandler = () => {
    if (
      tempObj.score.trim() === "" ||
      tempObj.description.trim() === "" ||
      tempObj.name.trim() === ""
    ) {
      return;
    } else {
      props.setData((prev) => {
        return { ...prev, education: [...prev[attributeName]].concat(tempObj) };
      });
      setTempObj(() => {
        return {
          name: "",
          description: "",
          score: "",
        };
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
            label="Education"
            variant="outlined"
            type={props.attributeNumber}
            value={tempObj.name}
            onChange={(e) => {
              setTempObj({ ...tempObj, name: e.target.value });
            }}
            sx={{ width: "92%" }}
            inputProps={{ maxLength: 50 }}
            error={tempObj.name.trim() === ""}
            helperText={tempObj.name.trim() === "" ? "Name field is empty" : ""}
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
            error={tempObj.description.trim() === ""}
            helperText={
              tempObj.description.trim() === ""
                ? "Description field is empty"
                : ""
            }
          />
        </div>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Score"
            variant="outlined"
            onChange={(e) => {
              setTempObj({ ...tempObj, score: e.target.value });
            }}
            sx={{ width: "92%" }}
            value={tempObj.score}
            inputProps={{ maxLength: 10 }}
            error={tempObj.score.trim() === ""}
            helperText={
              tempObj.score.trim() === "" ? "Score field is empty" : ""
            }
          />
        </div>
        <div className={styles.endHolder}>
          <Fab
            size="medium"
            color="secondary"
            onClick={onClickEducationHandler}
            aria-label="add"
          >
            <AddIcon fontSize="medium" />
          </Fab>
        </div>
        {props.data.education.map((ele, ind) => {
          return (
            <EducationDisplay
              key={ind}
              data={ele}
              wholeData={props.data} // Alias data -> wholeData
              setData={props.setData}
            ></EducationDisplay>
          );
        })}
      </div>
    </div>
  );
}

export default EducationInput;
