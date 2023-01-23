import React from 'react'
import styles from "./OutputWindow.module.css";

export default function OutputWindow({data}) {

    const ed=data.education;


  return (
    <div className={styles.wrapper}  >
        <h2>
           {data.name} 
        </h2>
        <h6>
            {data.socials.map((social)=>{return  <h6>{social.name}
                {social.link}</h6>
            } )}
        </h6>
        <h5>{data.email}</h5>
        <h5>{data.age}</h5>

       <h5>{data.education.map((education) => <li>{education}</li>)}</h5>
        
        <h5>
        {data.skill.map((skill) => <li>{skill}</li>)}
        </h5>
        <h5>
            {data.socials.map((social)=>{return  <div>{social.name}
                {social.link}</div>
            } )}
        </h5>
        <h5>
            
        {data.projects.map((project)=>{return  <div>{project.name}
                {project.description}</div>
            })}

        </h5>
        
        <h5>
        {data.achievements.map((achv)=>{return  <div>{achv}</div>
            } )}
        </h5>


    </div>
  );
}
