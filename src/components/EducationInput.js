import styles from "./EducationInput.module.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DropDisplay from "./EducationDisplay";

function EducationInput(props) {
  let attributeName = props.attributeName;
  const [tempObj, setTempObj] = useState({
    name: "",
    description: "",
    score: "",
  });

  const onClickHandler = () => {
    props.setData((prev) => {
      // console.log(tempObj);
      prev[attributeName].push(tempObj);
      // console.log(prev);
      return { ...prev };
    });
    setTempObj(() => {
      return {
        name: "",
        description: "",
        score: "",
      };
    });
    // console.log(props.data);
  };
  // console.log(props.data);

  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>{props.attributeName}</div>
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
            <DropDisplay
              key={ind}
              data={ele}
              wholeData={props.data} // Alias data -> wholeData
              setData={props.setData}
            ></DropDisplay>
          );
        })}
      </div>
    </div>
  );
}

export default EducationInput;
