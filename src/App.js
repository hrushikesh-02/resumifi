import "./App.css";
import AttributeForm from "../src/components/AttributeForm";
// import OutputWindow from "../src/components/OutputWindow";
import { useState } from "react";
import OutputWindow from "./components/OutputWindow";

function App() {
  const [data, setData] = useState({
    name: "Hrushikesh",
    age: "20",
    email: "hpatel1@gmail.com",
    education: ["abc", "xyz", "1423"],
    skill: ["cpp", "java", "python"],
    socials: [{ name: "github", link: "github.com" }],
    projects: [{ name: "github", link: "github.com", description: "nil" }],
    achievements: ["4* on codechef", "leetcoder"],
  });

  return (
    <>
      <div className="App">
        <AttributeForm />
        <header className="App-header">
          <OutputWindow data={data} />
        </header>
      </div>
    </>
  );
}

export default App;
