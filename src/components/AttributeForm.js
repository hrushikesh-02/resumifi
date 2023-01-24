import styles from "./AttributeForm.module.css";
import InputElement from "./InputElement";
import React, { useState } from "react";

function Attributeform() {
  const [data, setData] = useState({
    name: "Hrushikesh",
    age: "20",
    email: "hpatel1@gmail.com",
    education: ["abc", "xyz", "1423"],
    skill: ["cpp", "java", "python"],
    socials: [{ name: "github", link: "github.com" }],
    projects: [{ name: "github", link: "github.com", description: "nil" }],
    achievements: ["4* on codechef", "leetcoder"],
  });
  return (
    <div className={styles.formContainer}>
      {Object.keys(data).map((property) => {
        return (
          <InputElement
            attributeName={property}
            // data={data[property]}
            data=""
            setData={setData}
          />
        );
      })}
    </div>
  );
}

export default Attributeform;
