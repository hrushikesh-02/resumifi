import React from "react";
import styles from "./Template2.module.css";
import Chip from "@mui/material/Chip";

function Template2(props) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.nameSection}>
          <div className={styles.name}>{props.data.name}</div>
          <div className={styles.sub}>{props.data.role}</div>
          <div className={styles.contactSection}>
            <div className={styles.contactSectionChild}>
              {props.data.contact}
            </div>

            <a
              href={`mailto:${props.data.email}`}
              className={styles.contactSectionChild}
            >
              {props.data.email}
            </a>

            <a
              href={props.data.linkedin}
              className={styles.contactSectionChild}
            >
              Linkedin
            </a>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        {props.emptyCheck.education && (
          <div className={styles.section}>
            <div className={styles.lowerSectionTitle}>Education</div>
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

        {/* PROJECT SECTION */}
        {props.emptyCheck.projects && (
          <div className={styles.section}>
            <div className={styles.lowerSectionTitle}>Projects</div>
            <div style={{ margin: 0 }}>
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
          </div>
        )}
      </div>

      <div
        className={styles.rightContainer}
        style={{ backgroundColor: props.data.color }}
      >
        {/* IMAGE SECTION */}
        <div className={styles.imageSection}>
          <img alt="Null" src={props.data.profileImage} width="150px" />
        </div>

        {/* SKILLS SECTION */}
        {props.emptyCheck.skills && (
          <div className={styles.section}>
            <div
              className={styles.lowerSectionTitle}
              style={{
                color: props.data.color2,
                borderBottom: `1px solid ${props.data.color2}`,
              }}
            >
              Skills
            </div>
            <div className={styles.skillsOutput}>
              {props.data.skills.map((ele, ind) => {
                return (
                  <div key={ele} className={styles.container}>
                    <div
                      className={styles.header}
                      style={{ fontSize: "1.3rem", color: props.data.color2 }}
                    >
                      <Chip
                        label={ele}
                        variant="outlined"
                        sx={{
                          color: props.data.color2,
                          border: `1px solid ${props.data.color2}`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SOCIAL LINKS */}
        {props.emptyCheck.socials && (
          <div className={styles.section}>
            <div
              className={styles.lowerSectionTitle}
              style={{
                color: props.data.color2,
                borderBottom: `1px solid ${props.data.color2}`,
              }}
            >
              Social Links
            </div>
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

        {/* LANGUAGES */}
        {props.emptyCheck.languages && (
          <div className={styles.section}>
            <div
              className={styles.lowerSectionTitle}
              style={{
                color: props.data.color2,
                borderBottom: `1px solid ${props.data.color2}`,
              }}
            >
              Languages
            </div>
            {props.data.languages.map((ele, ind) => {
              return (
                <div key={ele} className={styles.container}>
                  <div
                    className={styles.header}
                    style={{ color: props.data.color2, fontSize: "1.3rem" }}
                  >
                    {ele}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ACHIEVEMENTS */}
        {props.emptyCheck.achievements && (
          <div className={styles.section}>
            <div
              className={styles.lowerSectionTitle}
              style={{
                color: props.data.color2,
                borderBottom: `1px solid ${props.data.color2}`,
              }}
            >
              Achievements
            </div>
            {props.data.achievements.map((ele, ind) => {
              return (
                <div key={ele} className={styles.container}>
                  <div
                    className={styles.header}
                    style={{ color: props.data.color2, fontSize: "1.3rem" }}
                  >
                    {ele.name}
                  </div>
                  <div
                    className={styles.description}
                    style={{ color: props.data.color2 }}
                  >
                    {ele.description}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Template2;
