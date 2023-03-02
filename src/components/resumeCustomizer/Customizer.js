import React, { useState } from "react";
import styles from "./Customizer.module.css";
import Fab from "@mui/material/Fab";
import PreviewIcon from "@mui/icons-material/Preview";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Tooltip from "@mui/material/Tooltip";
import { ChromePicker } from "react-color";
import { useReactToPrint } from "react-to-print";

function Customizer(props) {
  const [color, setColor] = useState(() => {
    if (props.data.color) {
      return props.data.color;
    } else {
      return "#000000";
    }
  });
  const [showColorPicker, setShowColorPicker] = useState(false);

  const [color2, setColor2] = useState(() => {
    if (props.data.color) {
      return props.data.color2;
    } else {
      return "#000000";
    }
  });
  const [showColorPicker2, setShowColorPicker2] = useState(false);

  const handlePrint = useReactToPrint({
    documentTitle: `${props.data.name}_resume`,
    content: () => props.forwardedRef.current,
  });

  const handlePrintScaleTrue = () => {
    props.setPrintScale(true);
  };
  const handlePrintScaleFalse = () => {
    props.setPrintScale(false);
  };

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
          title="Template"
          placement="left"
          disableFocusListener
          disableTouchListener
        >
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={async () => {
              await props.setTemplateNumber((curr) => (curr + 1) % 3);
            }}
          >
            {props.templateNumber + 1}
          </Fab>
        </Tooltip>
      </div>
      <div className={styles.customizerComponent}>
        <Tooltip
          title="Color-1"
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
              setShowColorPicker2(false);
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
                  return { ...prev, color: updatedColor.hex };
                });
              }}
            />
          </div>
        )}
      </div>
      <div className={styles.customizerComponent}>
        <Tooltip
          title="Color-2"
          placement="left"
          disableFocusListener
          disableTouchListener
        >
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={() => {
              setShowColorPicker(false);

              setShowColorPicker2((showColorPicker2) => !showColorPicker2);
            }}
          >
            <ColorLensIcon style={{ fill: color2 }} />
          </Fab>
        </Tooltip>
        {showColorPicker2 && (
          <div className={styles.colorPicker2}>
            <ChromePicker
              disableAlpha={true}
              styles={{ border: "1px solid red", display: "flex " }}
              color={color2}
              onChange={(updatedColor) => {
                setColor2(updatedColor.hex);
                props.setData((prev) => {
                  return { ...prev, color2: updatedColor.hex };
                });
              }}
            />
          </div>
        )}
      </div>
      <div className={styles.customizerComponent}>
        <Tooltip
          title="Print"
          placement="left"
          disableFocusListener
          disableTouchListener
        >
          <Fab
            size="small"
            color="secondary"
            aria-label="add"
            onClick={async () => {
              await handlePrintScaleTrue();
              handlePrint();
              handlePrintScaleFalse();
            }}
          >
            <SaveAltIcon />
          </Fab>
        </Tooltip>
      </div>
    </div>
  );
}

export default Customizer;
