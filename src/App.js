import "./App.css";
import AttributeForm from "./components/resumeInput/AttributeForm";
import { useState } from "react";
import OutputWindow from "./components/resumeDisplay/OutputWindow";
import Customizer from "./components/resumeCustomizer/Customizer";

function App() {
  const [data, setData] = useState({
    name: "Shreyash",
    email:"",
    education: [
      { name: "name", description: "description", score: "90%" },
      { name: "name", description: "description", score: "70%" },
    ],
    skill: ["cpp", "java", "python"],
    socials: [
      { name: "github", link: "https://github.com/" },
      { name: "codechef", link: "https://www.codechef.com/learn" },
    ],
    projects: [
      { name: "resumifi", link: "github.com", description: "nil" },
    ],
    achievements: ["4* on codechef", "leetcoder"],
    color: "#000000",
  });

  const [preview, setPreview] = useState(false);
  const [toPrint, setToPrint] = useState(false);
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
          toPrint={toPrint}
          setToPrint={setToPrint}
        />
      </div>
    </>
  );
}

export default App;
