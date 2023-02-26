import React from "react";
import styles from "./ImageInput.module.css";
import Avatar from "react-avatar-edit";
const ImageInput = (props) => {
  // const handleImageUpload = (e) => {
  //   props.setData((prev) => {
  //     return { ...prev, profileImage: URL.createObjectURL(e.target.files[0]) };
  //   });
  // };

  const onCrop = (preview) => {
    props.setData((prev) => {
      return { ...prev, profileImage: preview };
    });
    console.log(props.data);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageInputWrapper}>
        {/* <Button variant="contained" component="label">
          Upload
          <input
            hidden
            onChange={(e) => {
              handleImageUpload(e);
            }}
            type="file"
            accept="image/*"
          />
        </Button> */}
        <Avatar width={160} height={160} onCrop={onCrop} />
      </div>
      <div className={styles.imageOutputWrapper}>
        <div className={styles.imageOutputWrapperHolder}>
          <img
            src={props.data.profileImage}
            width="100%"
            height="100%"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageInput;
