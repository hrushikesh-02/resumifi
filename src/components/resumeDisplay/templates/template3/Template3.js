import React from "react";
import styles from "./Template3.module.css";
import Chip from "@mui/material/Chip";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";

const Template3 = (props) => {
  return (
    <div className={styles.mainContainer}>
      <div
        className={styles.bar}
        style={{ backgroundColor: props.data.color2 }}
      ></div>

      <div className={styles.middle}>
        <div className={styles.titleSection}>
          <div className={styles.name}>{props.data.name}</div>
          <div className={styles.role}>{props.data.role}</div>
          {/* CONTACT INFO */}
          {/* <div className={styles.sectionTitle}>Contact Info</div> */}
          <div className={styles.contactSection}>
            <a
              href={`mailto:${props.data.email}`}
              className={styles.contactSectionChild}
            >
              <EmailIcon sx={{ color: "gray" }} />
              &nbsp;Email
            </a>
            <div className={styles.contactSectionChild}>
              <CallIcon sx={{ color: "gray" }} />
              &nbsp;{props.data.contact}
            </div>
            <a
              href={props.data.linkedin}
              className={styles.contactSectionChild}
            >
              <LinkedInIcon sx={{ color: "#0A66C2" }} />
              &nbsp;Linkedin
            </a>
          </div>
        </div>

        <div className={styles.resumeBody}>
          <div className={styles.leftSection}>
            {/* SKILLS SECTION */}
            {props.emptyCheck.skills && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Skills</div>
                <div className={styles.skillsOutput}>
                  {props.data.skills.map((ele, ind) => {
                    return (
                      <div key={ele} className={styles.container}>
                        <div
                          className={styles.header}
                          style={{
                            fontSize: "1.3rem",
                          }}
                        >
                          <Chip label={ele} variant="outlined" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* EDUCATION SECTION */}
            {props.emptyCheck.education && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Education</div>
                {props.data.education.map((ele, ind) => {
                  return (
                    <div
                      key={ele.name}
                      className={styles.container}
                      style={{ marginTop: "0.5rem" }}
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

            {/* SOCIAL LINKS */}
            {props.emptyCheck.socials && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Social Links</div>
                <div className={styles.skillsOutput}>
                  {props.data.socials.map((ele, ind) => {
                    return (
                      <div key={ele.name} className={styles.container}>
                        <a
                          href={ele.link}
                          className={styles.header}
                          style={{
                            fontSize: "1.3rem",
                            textDecoration: "none",
                          }}
                        >
                          {ele.name},
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* LANGUAGES */}
            {props.emptyCheck.languages && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Languages</div>
                {props.data.languages.map((ele, ind) => {
                  return (
                    <div key={ele} className={styles.container}>
                      <div className={styles.header}>{ele}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.rightSection}>
            {props.emptyCheck.summary && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Summary</div>
                <div className={styles.container}>{props.data.summary}</div>
              </div>
            )}
            {/* PROJECT SECTION */}
            {props.emptyCheck.projects && (
              <div className={styles.section}>
                <div className={styles.sectionTitle}>Projects</div>
                <ul style={{ margin: 0 }}>
                  {props.data.projects.map((ele, ind) => {
                    return (
                      <li
                        key={ele.name}
                        className={styles.container}
                        style={{ marginTop: "1rem" }}
                      >
                        <div className={styles.header}>
                          {ele.name}&nbsp;<a href={ele.link}>link</a>
                        </div>
                        <div className={styles.description}>
                          {ele.description}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={styles.bar}
        style={{ backgroundColor: props.data.color2 }}
      ></div>
    </div>
  );
};

export default Template3;
