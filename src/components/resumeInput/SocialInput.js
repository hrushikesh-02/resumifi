import React, { useState } from "react";
import styles from "./SocialInput.module.css";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

function SocialInput(props) {
  let attributeName = props.attributeName;
  const [tempObj, setTempObj] = useState({
    name: "",
    link: "",
  });
  const [isTouched, setIsTouched] = useState(false);
  const onClickHandler = () => {
    if (tempObj.name.trim() === "" || tempObj.link.trim() === "") {
      setIsTouched(true);
      return;
    } else {
      props.setData((prev) => {
        return { ...prev, socials: [...prev[attributeName]].concat(tempObj) };
      });

      setTempObj(() => {
        return { name: "", link: "" };
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
            label="Link"
            variant="outlined"
            onChange={(e) => {
              setTempObj({ ...tempObj, link: e.target.value });
            }}
            sx={{ width: "92%", zIndex: "0" }}
            value={tempObj.link}
            error={isTouched && tempObj.link.trim() === ""}
            helperText={
              isTouched && tempObj.link.trim() === ""
                ? "Link field is empty"
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
        {props.data.socials.map((ele, ind) => {
          return (
            <div key={ind} className={styles.socialsDisplayContainer}>
              <a
                href={ele.link}
                className={styles.socialsDisplayInnerContainer}
                target="_blank"
                rel="noreferrer"
              >
                {ele.name}
              </a>
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
                        socials: props.data.socials.filter(
                          (element, ind) =>
                            ele.name !== props.data.socials[ind].name
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
}

export default SocialInput;
