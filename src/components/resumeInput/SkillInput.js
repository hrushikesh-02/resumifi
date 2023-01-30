import React, { useState } from "react";
import styles from "./SkillInput.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";
function SkillInput(props) {
  const [tempObj, setTempObj] = useState("");

  const onClickHandler = () => {
    if (!tempObj) {
      alert("not empty");
    } else {
      props.setData((prev) => {
        prev["skill"].push(tempObj);
        setTempObj("");
        return { ...prev };
      });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <b>{props.attributeName}</b>
      </div>
      <div className={styles.skillInput}>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Skill"
            variant="outlined"
            onChange={(e) => {
              setTempObj(e.target.value);
            }}
            sx={{ width: "92%" }}
            value={tempObj}
          />
        </div>
        <div className={styles.marginHolder}></div>
      </div>
      <div className={styles.endHolder}>
        <Fab
          size="medium"
          color="secondary"
          onClick={onClickHandler}
          aria-label="add"
        >
          <AddIcon fontSize="medium" />
        </Fab>
      </div>

      <div className={styles.chipContainer}>
        {props.data.skill.map((ele) => {
          return (
            <div key={ele} className={styles.chipMarginHolder}>
              <Chip
                label={ele}
                onDelete={() => {
                  props.setData((prev) => {
                    return {
                      ...prev,
                      skill: props.data.skill.filter(
                        (currele) => ele !== currele
                      ),
                    };
                  });
                }}
                className={styles.marginHolder}
                sx={{
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillInput;