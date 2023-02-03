import React from "react";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
export default function Header({ data }) {
  const [Emailcheck, setEmail] = useState(false);

  useEffect(() => {
    if (data.email.length === 0) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  }, [data]);

  return (
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
  );
}
