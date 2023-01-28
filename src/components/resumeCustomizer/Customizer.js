import React, { useState } from "react";
import styles from "./Customizer.module.css";
import Fab from "@mui/material/Fab";
import PreviewIcon from "@mui/icons-material/Preview";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Tooltip from "@mui/material/Tooltip";
import { ChromePicker } from "react-color";
import TextFormatRoundedIcon from "@mui/icons-material/TextFormatRounded";
function Customizer(props) {
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className={styles.buttonHolder}>
      <div className={styles.customizerComponent}>
        <Tooltip
          title="Preview"
          placement="left"
          disableFocusListener
          disableTouchListener
        >
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              props.setPreview((preview) => {
                console.log(preview);
                return !preview;
              });
            }}
          >
            <PreviewIcon />
          </Fab>
        </Tooltip>
      </div>
      <div className={styles.customizerComponent}>
        <Tooltip
          title="Color"
          placement="left"
          disableFocusListener
          disableTouchListener
        >
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              setShowColorPicker((showColorPicker) => !showColorPicker);
            }}
          >
            <ColorLensIcon style={{ fill: color }} />
          </Fab>
        </Tooltip>
        {showColorPicker && (
          <div className={styles.colorPicker}>
            <ChromePicker
              disableAlpha={true}
              styles={{ border: "1px solid red", display: "flex " }}
              color={color}
              onChange={(updatedColor) => {
                setColor(updatedColor.hex);
                props.setData((prev) => {
                  return { ...prev, color: color };
                });
              }}
            />
          </div>
        )}
      </div>
      <div className={styles.customizerComponent}>
        <Tooltip
          title="Font"
          placement="left"
          disableFocusListener
          disableTouchListener
        >
          <Fab size="small" color="secondary" aria-label="add">
            <TextFormatRoundedIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}

export default Customizer;
