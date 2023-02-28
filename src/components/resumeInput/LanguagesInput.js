import React, { useState } from "react";
import styles from "./LanguagesInput.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Chip from "@mui/material/Chip";

function LanguagesInput(props) {
  let attributeName = props.attributeName;
  const [tempObj, setTempObj] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const onClickHandler = () => {
    if (!tempObj) {
      setIsTouched(true);
      return;
    } else {
      props.setData((prev) => {
        return { ...prev, languages: [...prev[attributeName]].concat(tempObj) };
      });

      setTempObj(() => {
        return "";
      });

      setIsTouched(false);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.skillInput}>
        <div className={styles.marginHolder}>
          <TextField
            id="outlined-basic"
            label="Language"
            variant="outlined"
            onChange={(e) => {
              setTempObj(e.target.value);
            }}
            sx={{ width: "92%", zIndex: "0" }}
            value={tempObj}
            error={isTouched && tempObj.trim() === ""}
            helperText={
              isTouched && tempObj.trim() === ""
                ? "Language field is empty"
                : ""
            }
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
          sx={{ zIndex: "0" }}
        >
          <AddIcon fontSize="medium" />
        </Fab>
      </div>

      <div className={styles.chipContainer}>
        {props.data.languages.map((ele, ind) => {
          return (
            <div key={ind} className={styles.chipMarginHolder}>
              <Chip
                label={ele}
                onDelete={() => {
                  props.setData((prev) => {
                    return {
                      ...prev,
                      languages: props.data.languages.filter(
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

export default LanguagesInput;
