import React from 'react'
import styles from"./Education.css";
export default function Education({data}) {
  return (
    <div className='EduComponent'>
        {data.education.map((edu) => {
            return (
              <h6>
                {edu.name}
                {edu.degree}
              </h6>
            );
          })}
       
    </div>
  );
}
