import React from "react";
import Education from "./Education.js";
import styles from "./OutputWindow.module.css";
import { useState, useEffect } from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Header from "./Header.js";
export default function OutputWindow(props) {
  const [isProjectEmpty, setProjectEmpty] = useState(false);
  const [isEducationEmpty, setEducationEmpty] = useState(false);
  const [isSkillEmpty, setSkillEmpty] = useState(false);
  const [isHeaderEmpty, setHeaderEmpty] = useState(false);

  useEffect(() => {
    if (props.data.education.length === 0) {
      setEducationEmpty(true);
    } else {
      setEducationEmpty(false);
    }
    if (props.data.projects.length === 0) {
      setProjectEmpty(true);
    } else {
      setProjectEmpty(false);
    }

    if (props.data.skill.length === 0) {
      setSkillEmpty(true);
    } else {
      setSkillEmpty(false);
    }
    if (props.data.name.length === 0 && props.data.email.length === 0) {
      setHeaderEmpty(true);
    } else {
      setHeaderEmpty(false);
    }
  }, [props.data]);

  let height = window.innerHeight;

  

  return (
    <div
      className={styles.wrapper}
      id="pdf"
      ref={props.forwardedRef}
      style={{ scale: `${height / 1130}` }}
    >
      {!isHeaderEmpty && <Header data={props.data} />}
      <div className={styles.maincontent}>
        {!isEducationEmpty && <Education data={props.data} />}
        {!isProjectEmpty && <Projects data={props.data} />}
        {!isSkillEmpty && <Skills data={props.data} />}
      </div>
    </div>
  );
}
