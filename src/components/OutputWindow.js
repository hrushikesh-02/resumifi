import React from "react";
import Education from "./Education";
import styles from "./OutputWindow.module.css";

export default function OutputWindow({ data }) {
  //   const ed = data.education;

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
        <a href={ "mailto:" + data.email.value}>
          {data.email.name}
          </a></span>
      </div>

     <Education  data={data}/>

      {/* <div className={styles.header}>
        <h3>{data.name}</h3>
       
          {data.socials.map((social) => {
            return (
              <h6>
                {social.name}
                {social.link}
              </h6>
            );
          })}
       
      </div>

      <div className={styles.main}></div>

      <h5>{data.email}</h5>
      <h5>{data.age}</h5>
      <h5>
        {data.education.map((education) => (
          <li>{education}</li>
        ))}
      </h5>

      <h5>
        {data.skill.map((skill) => (
          <li>{skill}</li>
        ))}
      </h5>
      <h5>
        {data.socials.map((social) => {
          return (
            <div>
              {social.name}
              {social.link}
            </div>
          );
        })}
      </h5>
      <h5>
        {data.projects.map((project) => {
          return (
            <div>
              {project.name}
              {project.description}
            </div>
          );
        })}
      </h5>

      <h5>
        {data.achievements.map((achv) => {
          return <div>{achv}</div>;
        })}
      </h5> */}
    </div>
  );
}
