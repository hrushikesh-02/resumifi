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

  const onClickHandler = () => {
    if (tempObj.name.trim() === "" || tempObj.link.trim() === "") {
      alert("Please fill all the details to add");
    } else {
      props.setData((prev) => {
        prev[attributeName].push(tempObj);
        setTempObj({ name: "", link: "" });
        return { ...prev };
      });
    }
  };
  return (
    <div className={styles.inputElement}>
      <div className={styles.attributeName}>
        <b>Links</b>
      </div>
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
            sx={{ width: "92%" }}
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
            sx={{ width: "92%" }}
            value={tempObj.link}
          />
        </div>
        <div className={styles.endHolder} onClick={onClickHandler}>
          <Fab size="medium" color="secondary" aria-label="add">
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
