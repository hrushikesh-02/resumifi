import React from "react";
import Education from "./Education.js";
import styles from "./OutputWindow.module.css";
import { useState, useEffect, useRef } from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Header from "./Header.js";
export default function OutputWindow({ data }) {
  const [isProjectEmpty, setProjectEmpty] = useState(false);
  const [isEducationEmpty, setEducationEmpty] = useState(false);
  const [isSkillEmpty, setSkillEmpty] = useState(false);
  const [isHeaderEmpty, setHeaderEmpty] = useState(false);

  useEffect(() => {
    if (data.education.length === 0) {
      setEducationEmpty(true);
    } else {
      setEducationEmpty(false);
    }
    if (data.projects.length === 0) {
      setProjectEmpty(true);
    } else {
      setProjectEmpty(false);
    }

    if (data.skill.length === 0) {
      setSkillEmpty(true);
    } else {
      setSkillEmpty(false);
    }
    if (data.name.length === 0 && data.email.length === 0) {
      setHeaderEmpty(true);
    } else {
      setHeaderEmpty(false);
    }
  }, [data]);

  let componentRef = useRef();
  return (
    <div className={styles.wrapper} id="pdf" ref={(el) => (componentRef = el)}>
      {!isHeaderEmpty && <Header data={data} />}
      <div className={styles.maincontent}>
        {!isEducationEmpty && <Education data={data} />}
        {!isProjectEmpty && <Projects data={data} />}
        {!isSkillEmpty && <Skills data={data} />}
      </div>
    </div>
  );
}
