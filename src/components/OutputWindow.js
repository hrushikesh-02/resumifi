import React from "react";
import Education from "./Education";
import styles from "./OutputWindow.module.css";
import Projects from "./Projects";
export default function OutputWindow({ data }) {
  //   const ed = data.education;
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{data.name}</h2>
        {data.socials.map((social) => {
          return (
            <span key={social.link}>
              {/* have to update key */}
              <a href={social.link}>{social.name}</a>
            </span>
          );
        })}
        <span>
          <a href={"mailto:" + data.email}>Email</a>
        </span>
      </div>
      
        <Education data={data}/>
        <Projects data={data}/>
    </div>
  );
}
