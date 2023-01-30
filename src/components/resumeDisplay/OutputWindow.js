import React from "react";
import Education from "./Education.js";
import styles from "./OutputWindow.module.css";
import Projects from "./Projects.js";
import { useState, useEffect } from "react";
import Skills from "./Skills.js";
export default function OutputWindow({ data }) {
  const [isProjectEmpty, setProjectEmpty] = useState(false);
  const [isEducationEmpty, setEducationEmpty] = useState(false);
  const [Emailcheck, setEmail] = useState(false);
  const [isSkillEmpty, setSkillEmpty] = useState(false);
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
    if (data.email.length === 0) {
      setEmail(true);
    } else {
      setEmail(false);
    }
    if (data.skill.length === 0) {
      setSkillEmpty(true);
    } else {
      setSkillEmpty(false);
    }
  }, [data]);

  return (
    <div className={styles.wrapper} id="pdf">
      <div className={styles.header} style={{ color: `${data.color2}` }}>
        <h2>{data.name}</h2>
        <div className={styles.sociallinks}>
          {data.socials.map((social) => {
            return (
              <a href={social.link} key={social.link}>
                {social.name}
              </a>
            );
          })}
          {!Emailcheck && <a href={"mailto:" + data.email}>Email</a>}
        </div>
      </div>
      <div className={styles.maincontent}>
        {!isEducationEmpty && <Education data={data} />}
        {!isProjectEmpty && <Projects data={data} />}
        {!isSkillEmpty && <Skills data={data} />}
      </div>
    </div>
  );
}
