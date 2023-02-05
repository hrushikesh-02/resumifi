import React from "react";
import styles from "./Template2.module.css";
function Template2(props) {
  return (
    <>
      <div className={styles.wrapper}>
        {/* style={{ color: `${props.data.color}` }} */}
        <div className={styles.leftWrapper}>
          <div className={styles.header}>{props.data.name}</div>
          <div className={styles.blobLHS}>
            <div className={styles.outputList}>
              <div>
                <b>EDUCATION</b>
              </div>
              {props.data.education.map((ele) => {
                return (
                  <div className={styles.outputListWrapper}>
                    <div
                      className={styles.outputListElement}
                      style={{ display: "flex", color: "black" }}
                    >
                      {ele.name}
                      <div
                        className={styles.outputListElement}
                        style={{ marginLeft: "1rem", color: "black" }}
                      >
                        {ele.score}
                      </div>
                    </div>
                    <div
                      className={styles.outputListElement}
                      style={{ color: "black" }}
                    >
                      {ele.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.blobLHS}>
            <div className={styles.outputList}>
              <div>
                <b>PROJECTS</b>
              </div>
              {props.data.projects.map((ele) => {
                return (
                  <div className={styles.outputListWrapper}>
                    <div
                      className={styles.outputListElement}
                      style={{
                        borderBottom: "1px solid ",
                        color: "black",
                        display: "flex",
                      }}
                    >
                      {ele.name}
                    </div>
                    <div
                      className={styles.outputListElement}
                      style={{ color: "black" }}
                    >
                      {ele.description}
                    </div>
                    <div
                      className={styles.outputListElement}
                      style={{ color: "black" }}
                    >
                      {ele.link}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.rightWrapper}>
          <div className={styles.blobRHS}>
            <div className={styles.attributeTitle}>Skills</div>
            <div className={styles.outputList}>
              {props.data.skill.map((ele) => {
                return <div className={styles.outputListElement}>{ele}</div>;
              })}
            </div>
          </div>

          <div className={styles.blobRHS}>
            <div className={styles.attributeTitle}>Links</div>
            <div className={styles.outputList}>
              {props.data.socials.map((ele) => {
                return (
                  <div>
                    <a className={styles.outputListElement} href={ele.link}>
                      {ele.name}
                    </a>
                  </div>
                );
              })}
              <a className={styles.outputListElement} href={props.email}>
                {props.email}
              </a>
            </div>
          </div>
          <div className={styles.blobRHS}></div>
        </div>
      </div>
    </>
  );
}

export default Template2;
