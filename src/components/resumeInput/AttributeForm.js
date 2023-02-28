import SocialInput from "./SocialInput";
import styles from "./AttributeForm.module.css";
import EducationInput from "./EducationInput";
import InputElement from "./InputElement";
import ProjectInput from "./ProjectInput";
import SkillInput from "./SkillInput";
import LanguagesInput from "./LanguagesInput";
import React from "react";
import DropDown from "./DropDown";
import ImageInput from "./ImageInput";
import AchievementInput from "./AchievementInput";

const Attributeform = (props) => {
  let height = window.innerHeight;
  let width = window.innerWidth;

  return (
    <div
      className={styles.formContainer}
      style={{
        width: "40%",
        display: height > width ? (props.preview ? "none" : "flex") : "flex",
      }}
    >
      <div className={styles.header}>Attributes</div>
      <DropDown name="Name">
        <InputElement
          key={"name"}
          attributeName={"name"}
          data={props.data["name"]}
          setData={props.setData}
        />
      </DropDown>

      <DropDown name="Image">
        <ImageInput data={props.data} setData={props.setData} />
      </DropDown>

      <DropDown name="E-Mail">
        <InputElement
          key={"email"}
          attributeName={"email"}
          data={props.data["email"]}
          setData={props.setData}
          // sx={true ? { marginTop: "10rem" } : {}}
        />
      </DropDown>
      <DropDown name="Education">
        <EducationInput
          key={"education"}
          attributeName={"education"}
          data={props.data}
          setData={props.setData}
        />
      </DropDown>

      <DropDown name="Skills">
        <SkillInput
          key={"skills"}
          attributeName={"skills"}
          data={props.data}
          setData={props.setData}
        />
      </DropDown>
      <DropDown name="Languages">
        <LanguagesInput
          key={"languages"}
          attributeName={"languages"}
          data={props.data}
          setData={props.setData}
        />
      </DropDown>
      <DropDown name="Project">
        <ProjectInput
          key={"project"}
          attributeName={"projects"}
          data={props.data}
          setData={props.setData}
        />
      </DropDown>
      <DropDown name="Achievements">
        <AchievementInput
          key={"achievements"}
          attributeName={"achievements"}
          data={props.data}
          setData={props.setData}
        />
      </DropDown>
      <DropDown name="Links">
        <SocialInput
          key={"socials"}
          attributeName={"socials"}
          data={props.data}
          setData={props.setData}
        />
      </DropDown>
    </div>
  );
};

export default Attributeform;
