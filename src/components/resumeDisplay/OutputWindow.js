import React from "react";
import styles from "./OutputWindow.module.css";
import { useState, useEffect } from "react";
import Template2 from "./templates/template2/Template2.js";
import Template1 from "./templates/template1/Template1.js";

export default function OutputWindow(props) {
  const [emptycheck, setEmptyCheck] = useState({
    name: false,
    image: false,
    email: false,
    education: false,
    skills: false,
    projects: false,
    socials: false,
  });

  useEffect(() => {
    if (props.data.education.length === 0) {
      setEmptyCheck((prev) => {
        return { ...prev, education: false };
      });
    } else {
      setEmptyCheck((prev) => {
        return { ...prev, education: true };
      });
    }

    if (props.data.projects.length === 0) {
      setEmptyCheck((prev) => {
        return { ...prev, projects: false };
      });
    } else {
      setEmptyCheck((prev) => {
        return { ...prev, projects: true };
      });
    }

    if (props.data.skill.length === 0) {
      setEmptyCheck((prev) => {
        return { ...prev, skills: false };
      });
    } else {
      setEmptyCheck((prev) => {
        return { ...prev, skills: true };
      });
    }

    if (props.data.name.length === 0) {
      setEmptyCheck((prev) => {
        return { ...prev, name: false };
      });
    } else {
      setEmptyCheck((prev) => {
        return { ...prev, name: true };
      });
    }

    if (props.data.email.length === 0) {
      setEmptyCheck((prev) => {
        return { ...prev, email: false };
      });
    } else {
      setEmptyCheck((prev) => {
        return { ...prev, email: true };
      });
    }

    if (props.data.socials.length === 0) {
      setEmptyCheck((prev) => {
        return { ...prev, socials: false };
      });
    } else {
      setEmptyCheck((prev) => {
        return { ...prev, socials: true };
      });
    }
  }, [props.data]);

  let height = window.innerHeight;
  let width = window.innerWidth;

  return (
    <div
      className={styles.wrapper}
      id="pdf"
      ref={props.forwardedRef}
      style={{
        scale:
          height > width ? "1" : props.printScale ? "1" : `${height / 1200}`,
      }}
    >
      {props.templateNumber + 1 === 1 && (
        <Template1 data={props.data} emptycheck={emptycheck} />
      )}

      {props.templateNumber + 1 === 2 && (
        <Template2 data={props.data} emptycheck={emptycheck} />
      )}
    </div>
  );
}

//
//  The original dimensions that the react-to-print uses are 800px as width and 1130 as height
//
