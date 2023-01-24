import "./App.css";
import AttributeForm from "../src/components/AttributeForm";
import { useState } from "react";
import OutputWindow from "./components/OutputWindow";
import Customizer from "./components/Customizer";

function App() {
  const [data, setData] = useState({
    name: "Hrushikesh",
    age: "20",
    email: "abc@gmail.com",
    education: [
      { name: "name", description: "description", result: "90%" },
      { name: "name", description: "description", result: "90%" },
    ],
    skill: ["cpp", "java", "python"],
    socials: [
      { name: "github", link: "github.com" },
      { name: "codechef", link: "codechef.com" },
    ],
    projects: [{ name: "github", link: "github.com", description: "nil" }],
    achievements: ["4* on codechef", "leetcoder"],
  });
  return (
    <>
      <div className="App">
        <AttributeForm data={data} setData={setData} />
        <header className="AppOutput">
          <OutputWindow data={data} setData={setData} />
        </header>
        <Customizer />
      </div>
    </>
  );
}

export default App;
