import React, { useState } from "react";
import styles from "./AchievementInput.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const AchievementInput = (props) => {
  let attributeName = props.attributeName;

  const [tempObj, setTempObj] = useState({
    name: "",
    description: "",
  });
  const [isTouched, setIsTouched] = useState(false);

  const onClickHandler = () => {
    if (tempObj.name.trim() === "" || tempObj.description.trim() === "") {
      setIsTouched(true);
      return;
    } else {
      props.setData((prev) => {
        return {
          ...prev,
          achievements: [...prev[attributeName]].concat(tempObj),
        };
      });

      setTempObj(() => {
        return { name: "", description: "" };
      });

      setIsTouched(false);
    }
  };

  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeInput}>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Name"
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
        <div className={styles.endHolder}>
          <Fab
            size="medium"
            color="secondary"
            aria-label="add"
            sx={{ zIndex: "0" }}
            onClick={onClickHandler}
          >
            <AddIcon fontSize="medium" />
          </Fab>
        </div>
        {props.data.achievements.map((ele, ind) => {
          return (
            <div key={ind} className={styles.socialsDisplayContainer}>
              <div className={styles.socialsDisplayInnerContainer}>
                {ele.name}: <br></br>
                {ele.description}
              </div>
              <div>
                <Fab
                  size="small"
                  color="#ebebeb"
                  aria-label="add"
                  sx={{ zIndex: "0" }}
                  onClick={() => {
                    props.setData((oldValues) => {
                      return {
                        ...oldValues,
                        achievements: props.data.achievements.filter(
                          (element, ind) =>
                            ele.name !== props.data.achievements[ind].name
                        ),
                      };
                    });
                  }}
                >
                  <DeleteIcon size="small" />
                </Fab>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementInput;
