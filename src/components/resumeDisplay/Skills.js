import React from 'react'
import styles from"./Skills.module.css";
export default function Skills({ data }) {

  return (
    <div className={styles.skillcomponent}>
        Skills:
        <div className={styles.skillfield} >
                {data.skill.map((item)=>[
                 
                    <li key={item}>{item}</li>
                
                ])}
            </div>    

    </div>
  
  )
}
