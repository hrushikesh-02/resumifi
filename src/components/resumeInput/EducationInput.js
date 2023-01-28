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

  const onClickHandler = () => {
    if (
      tempObj.name.trim() === "" ||
      tempObj.description.trim() === "" ||
      tempObj.score.trim() === ""
    ) {
      alert("Please fill all the details to add");
    } else {
      props.setData((prev) => {
        prev[attributeName].push(tempObj);
        return { ...prev };
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
            // onChange={(e) => {
            //   props.setData((prev) => {
            //     prev[attributeName] = e.target.value;
            //     return { ...prev };
            //   });
            // }}
            onChange={(e) => {
              setTempObj({ ...tempObj, name: e.target.value });
            }}
            sx={{ width: "92%" }}
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
          />
        </div>
        <div className={styles.endHolder} onClick={onClickHandler}>
          <Fab size="medium" color="secondary" aria-label="add">
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
