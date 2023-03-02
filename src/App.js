import "./App.css";
import AttributeForm from "./components/resumeInput/AttributeForm";
import OutputWindow from "./components/resumeDisplay/OutputWindow";
import Customizer from "./components/resumeCustomizer/Customizer";

import React, { useState, useRef, useEffect } from "react";

function App() {
  const childRef = useRef(null);

  const [data, setData] = useState(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      return items;
    } else {
      return {
        profileImage: null,
        name: "Your Name",
        email: "abc@email.com",
        contact: "12334",
        role: "developer",
        linkedin: "https://www.linkedin.com/in/yourLinkedinhere/",
        summary:
          "ReactJS dev with experience in building responsive web applications.",
        education: [
          { name: "school1", description: "high school 2017", score: "90%" },
          {
            name: "school2",
            description: "senior-high school 2020",
            score: "95%",
          },
          { name: "college1", description: "college 2024", score: "100%" },
        ],
        skills: ["cpp", "java", "python"],
        languages: ["english", "tamil"],
        socials: [
          { name: "github", link: "https://github.com/" },
          { name: "codechef", link: "https://www.codechef.com/learn" },
        ],
        projects: [
          {
            name: "resumifi",
            link: "https://github.com/",
            description:
              "A react projects used to build resume with speed. The web application is based on ReactJs. It uses dsd sdsssdsdsddsdsas backend",
          },
          {
            name: "weatherApp",
            link: "https://github.com/",
            description: "A simple vanilla js project to display the weather ",
          },
        ],
        achievements: [
          { name: "temp", description: "the description" },
          { name: "temasdp", description: "the dessdcription" },
        ],
        color: "#000000",
        color2: "#000000",
      };
    }
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const [preview, setPreview] = useState(false);
  const [printScale, setPrintScale] = useState(false);
  const [templateNumber, setTemplateNumber] = useState(0);

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
