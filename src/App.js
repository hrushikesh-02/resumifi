import "./App.css";
import AttributeForm from "./components/resumeInput/AttributeForm";
import OutputWindow from "./components/resumeDisplay/OutputWindow";
import Customizer from "./components/resumeCustomizer/Customizer";

import React, { useState, useRef } from "react";

function App() {
  const childRef = useRef(null);

  // useEffect(() => {
  //   console.log(childRef.current);
  // }, []);

  const [data, setData] = useState({
    name: "Your Name",
    email: "abc@email.com",
    education: [
      { name: "name1", description: "description1", score: "90%" },
      { name: "name2", description: "description2", score: "95%" },
    ],
    skill: ["cpp", "java", "python"],
    socials: [
      { name: "github", link: "https://github.com/" },
      { name: "codechef", link: "https://www.codechef.com/learn" },
    ],
    projects: [
      {
        name: "resumifi",
        link: "https://github.com/",
        description:
          "A react projects used to construct resume for one according to his need.",
      },
      {
        name: "weatherApp",
        link: "https://github.com/",
        description: "A simple vanilla js project to display the weather ",
      },
    ],
    achievements: ["4* on codechef", "leetcoder"],
    color: "#000000",
    color2: "#000000",
  });

  const [preview, setPreview] = useState(false);
  const [printScale, setPrintScale] = useState(false);
  const [templateNumber, setTemplateNumber] = useState(1);

  let width = window.innerWidth;

  return (
    <>
      <div className="App">
        {!preview && (
          <AttributeForm data={data} setData={setData} preview={preview} />
        )}
        <div
          className="AppOutput"
          style={{ width: !preview ? (width < 1300 ? "75%" : "60%") : "95%" }}
        >
          <OutputWindow
            printScale={printScale}
            forwardedRef={childRef}
            data={data}
            setData={setData}
            preview={preview}
            templateNumber={templateNumber}
          />
        </div>
        <Customizer
          data={data}
          setData={setData}
          preview={preview}
          setPreview={setPreview}
          forwardedRef={childRef}
          printScale={printScale}
          setPrintScale={setPrintScale}
          templateNumber={templateNumber}
          setTemplateNumber={setTemplateNumber}
        />
      </div>
    </>
  );
}

export default App;
