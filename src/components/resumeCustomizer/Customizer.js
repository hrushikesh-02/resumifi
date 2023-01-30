import React, { useEffect, useState } from "react";
import styles from "./Customizer.module.css";
import Fab from "@mui/material/Fab";
import PreviewIcon from "@mui/icons-material/Preview";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Tooltip from "@mui/material/Tooltip";
import { ChromePicker } from "react-color";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function Customizer(props) {
  const [color, setColor] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const [color2, setColor2] = useState("#000000");
  const [showColorPicker2, setShowColorPicker2] = useState(false);

  useEffect(() => {
    props.setData((prev) => {
      return { ...prev, color: color };
    });
    props.setData((prev) => {
      return { ...prev, color2: color2 };
    });
  }, [props, color, color2]);

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
                  return { ...prev, color: color };
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
                  return { ...prev, color2: color2 };
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
              html2canvas(document.querySelector("#pdf")).then((canvas) => {
                document.body.appendChild(canvas);
                console.log(canvas);
                const pdf = new jsPDF("p", "pt", "letter");
                var width = pdf.internal.pageSize.getWidth(); //increases distortion
                var height = pdf.internal.pageSize.getHeight(); //increases distortion
                pdf.addImage(canvas, "JPEG", 0, 0, width, height);
                var pdfName = props.data.name + ".pdf";
                console.log(pdfName);
                pdf.save(pdfName);
              });
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
