import React from "react";
import styles from "./Template1.module.css";

const Template1 = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.upperSection}>
        <div className={styles.upperLeftSection}>
          <div className={styles.name}>{props.data.name}</div>
          <div className={styles.sub}>{props.data.summary}</div>
        </div>

        <div className={styles.upperRightSection}>
          <div className={styles.upperRightSectionChild}>Contact Info</div>
          <div className={styles.upperRightSectionChild}>
            {props.data.contact}
          </div>
          <a
            href={`mailto:${props.data.email}`}
            className={styles.upperRightSectionChild}
          >
            Email
          </a>
          <a
            href={props.data.linkedin}
            className={styles.upperRightSectionChild}
          >
            Linkedin
          </a>
        </div>
      </div>
      <div className={styles.lowerSection}>
        <div className={styles.lowerLeftSection}>
          {/* PROJECT SECTION */}
          {props.emptyCheck.projects && (
            <div className={styles.section}>
              <div className={styles.lowerSectionTitle}>Projects</div>
              {props.data.projects.map((ele, ind) => {
                return (
                  <div
                    key={ele.name}
                    className={styles.container}
                    style={{ marginTop: "1rem" }}
                  >
                    <div className={styles.header}>
                      {ele.name}&nbsp;<a href={ele.link}>link</a>
                    </div>
                    <div className={styles.description}>{ele.description}</div>
                  </div>
                );
              })}
            </div>
          )}

          {/* EDUCATION SECTION */}
          {props.emptyCheck.education && (
            <div className={styles.section}>
              <div className={styles.lowerSectionTitle}>Education </div>
              {props.data.education.map((ele, ind) => {
                return (
                  <div
                    key={ele.name}
                    className={styles.container}
                    style={{ marginTop: "1rem" }}
                  >
                    <div className={styles.header}>{ele.name}</div>
                    <div className={styles.description}>
                      {ele.description} - {ele.score}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.lowerRightSection}>
          {/* SKILLS SECTION */}
          {props.emptyCheck.skills && (
            <div className={styles.section}>
              <div className={styles.lowerSectionTitle}>Skills </div>
              {props.data.skills.map((ele, ind) => {
                return (
                  <div key={ele} className={styles.container}>
                    <div
                      className={styles.header}
                      style={{ fontSize: "1.3rem" }}
                    >
                      {ele}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {props.emptyCheck.socials && (
            <div className={styles.section}>
              <div className={styles.lowerSectionTitle}>Social Links </div>
              {props.data.socials.map((ele, ind) => {
                return (
                  <div key={ele.name} className={styles.container}>
                    <a
                      href={ele.link}
                      className={styles.header}
                      style={{ fontSize: "1.3rem" }}
                    >
                      {ele.name}
                    </a>
                  </div>
                );
              })}
            </div>
          )}

          {props.emptyCheck.languages && (
            <div className={styles.section}>
              <div className={styles.lowerSectionTitle}>Languages </div>
              {props.data.languages.map((ele, ind) => {
                return (
                  <div key={ele} className={styles.container}>
                    <div
                      className={styles.header}
                      style={{ fontSize: "1.3rem" }}
                    >
                      {ele}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template1;
