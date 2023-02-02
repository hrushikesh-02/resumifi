import "./App.css";
import AttributeForm from "./components/resumeInput/AttributeForm";
import OutputWindow from "./components/resumeDisplay/OutputWindow";
import Customizer from "./components/resumeCustomizer/Customizer";

import React, { useState } from "react";

function App() {
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
    projects: [{ name: "resumifi", link: "github.com", description: "nil" }],
    achievements: ["4* on codechef", "leetcoder"],
    color: "#000000",
    color2: "#000000",
  });

  const [preview, setPreview] = useState(false);

  return (
    <>
      <div className="App">
        {!preview && <AttributeForm data={data} setData={setData} />}
        <div
          id="divToPrint"
          className="AppOutput"
          style={{ width: !preview ? "60%" : "95%" }}
        >
          <OutputWindow id={"printablediv"} data={data} setData={setData} />
        </div>
        <Customizer
          data={data}
          setData={setData}
          preview={preview}
          setPreview={setPreview}
        />
      </div>
    </>
  );
}

export default App;
