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

  const [isTouched, setIsTouched] = useState(false);

  const onClickEducationHandler = () => {
    if (
      tempObj.score.trim() === "" ||
      tempObj.description.trim() === "" ||
      tempObj.name.trim() === ""
    ) {
      setIsTouched(true);
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
      setIsTouched(false);
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
            sx={{ width: "92%", zIndex: "0" }}
            inputProps={{ maxLength: 50 }}
            error={isTouched && tempObj.name.trim() === ""}
            helperText={
              isTouched && tempObj.name.trim() === ""
                ? "Name field is empty"
                : ""
            }
          />
        </div>
        {/* 
            istouch  isempty
              t         t       ->  t
              f         f       ->  f
              t         f       ->  f
              f         t       ->  f
        */}
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setTempObj({ ...tempObj, description: e.target.value });
            }}
            sx={{ width: "92%", zIndex: "0" }}
            value={tempObj.description}
            error={isTouched && tempObj.description.trim() === ""}
            helperText={
              isTouched && tempObj.description.trim() === ""
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
            sx={{ width: "92%", zIndex: "0" }}
            value={tempObj.score}
            inputProps={{ maxLength: 10 }}
            error={isTouched && tempObj.score.trim() === ""}
            helperText={
              isTouched && tempObj.score.trim() === ""
                ? "Score field is empty"
                : ""
            }
          />
        </div>
        <div className={styles.endHolder}>
          <Fab
            size="medium"
            color="secondary"
            onClick={onClickEducationHandler}
            aria-label="add"
            sx={{ zIndex: "0" }}
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
