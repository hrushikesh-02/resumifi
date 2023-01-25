import styles from "./AttributeForm.module.css";
import EducationInput from "./EducationInput";
import InputElement from "./InputElement";
import SkillInput from "./SkillInput";
// import React, { useState } from "react";

function Attributeform(props) {
  // const [data, setData] = useState({
  //   name: "Hrushikesh",
  //   age: "20",
  //   email: "abc@gmail.com",
  //   education: [
  //     { name: "name", description: "description", result: "90%" },
  //     { name: "name", description: "description", result: "90%" },
  //   ],
  //   skill: ["cpp", "java", "python"],
  //   socials: [
  //     { name: "github", link: "github.com" },
  //     { name: "codechef", link: "codechef.com" },
  //   ],
  //   projects: [
  //     { name: "github", link: "github.com", description: "nil" },
  //     { name: "github", link: "github.com", description: "nil" },
  //   ],
  //   achievements: ["4* on codechef", "leetcoder"],
  // });
  return (
    <div className={styles.formContainer}>
      {Object.keys(props.data).map((property) => {
        if (
          property === "socials" ||
          property === "achievements" ||
          property === "education" ||
          property === "projects" ||
          property === "skill"
        )
          return null;

        return (
          <InputElement
            key={property}
            attributeName={property}
            data={props.data[property]}
            setData={props.setData}
          />
        );
      })}
      <EducationInput
        key={"education"}
        attributeName={"education"}
        data={props.data}
        setData={props.setData}
      />
      <SkillInput
        key={"education"}
        attributeName={"education"}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
}

export default Attributeform;
