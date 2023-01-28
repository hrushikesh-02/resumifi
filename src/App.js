import "./App.css";
import AttributeForm from "./components/resumeInput/AttributeForm";
import { useState } from "react";
import OutputWindow from "./components/resumeDisplay/OutputWindow";
import Customizer from "./components/resumeCustomizer/Customizer";

function App() {
  const [data, setData] = useState({
    name: "Shreyash",
    email: "abc@gmail.com",
    education: [
      { name: "SRM", description: "University", score: "9.5CGPA" },
      { name: "VIT", description: "University[Masters]", score: "9CGPA" },
    ],
    skill: ["cpp", "java", "python"],
    socials: [
      { name: "github", link: "https://github.com/" },
      { name: "codechef", link: "https://www.codechef.com/learn" },
    ],
    projects: [{ name: "resumifi", link: "github.com", description: "nil" }],
    achievements: ["4* on codechef", "leetcoder"],
    color: "#000000",
  });

  const [preview, setPreview] = useState(false);

  return (
    <>
      <div className="App">
        {console.log(preview)}
        {preview && <AttributeForm data={data} setData={setData} />}
        <header
          className="AppOutput"
          style={{ width: preview ? "60%" : "95%" }}
        >
          <OutputWindow data={data} setData={setData} />
        </header>
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
