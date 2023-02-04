import SocialInput from "./SocialInput";
import styles from "./AttributeForm.module.css";
import EducationInput from "./EducationInput";
import InputElement from "./InputElement";
import ProjectInput from "./ProjectInput";
import SkillInput from "./SkillInput";
import React from "react";

const Attributeform = (props) => {
  // const [data, setData] = useState({
  //   name: "Hrushikesh",
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
  //   achievements: ["4* on codechef", "leetcode r"],
  // });
  // let width = window.innerWidth (width < 1300 ? "30%" : to form container);
  return (
    <div className={styles.formContainer} style={{ width: "40%" }}>
      <div className={styles.header}>Attributes</div>

      <InputElement
        key={"name"}
        attributeName={"name"}
        data={props.data["name"]}
        setData={props.setData}
      />
      <InputElement
        key={"email"}
        attributeName={"email"}
        data={props.data["email"]}
        setData={props.setData}
        // sx={true ? { marginTop: "10rem" } : {}}
      />
      <EducationInput
        key={"education"}
        attributeName={"education"}
        data={props.data}
        setData={props.setData}
      />
      <SkillInput
        key={"skill"}
        attributeName={"skill"}
        data={props.data}
        setData={props.setData}
      />
      <ProjectInput
        key={"project"}
        attributeName={"projects"}
        data={props.data}
        setData={props.setData}
      />
      <SocialInput
        key={"socials"}
        attributeName={"socials"}
        data={props.data}
        setData={props.setData}
      />
    </div>
  );
};

export default Attributeform;
