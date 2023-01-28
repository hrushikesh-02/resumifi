import React from "react";
import Education from "./Education";
import styles from "./OutputWindow.module.css";
import Projects from "./Projects";
import  { useState,useEffect } from 'react';
export default function OutputWindow({ data }) {

  const [isEducationEmpty, setEducationEmpty] = useState(false);
  useEffect(() => {
    // console.log(data.education.length);
    if(data.education.length===0)
    {
      setEducationEmpty(true)
    }
    else
    {
      setEducationEmpty(false)
    }

  }, [data])
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>{data.name}</h2>
        <div className={styles.sociallinks}>
          {data.socials.map((social) => {
            return (
             <a href={social.link} key={social.link}>
                {social.name}
              </a>
              
            );
          })}
          <a href={"mailto:" + data.email}>Email</a>
        </div>
      </div>

      {!isEducationEmpty && <Education data={data} />}

      <Projects data={data} />
    </div>
  );
}
