import "./App.css";
import AttributeForm from "../src/components/AttributeForm";
// import OutputWindow from "../src/components/OutputWindow";
import { useState } from "react";
import OutputWindow from "./components/OutputWindow";
import Customizer from "./components/Customizer";
function App() {
  const [data, setData] = useState({
    name: "Hrushikesh",
    age: "20",
    email: {name:"Email" ,value:"abc@gmai.com"},
    education: [{name:"abc" , degree:"btech" , result:"90%"}],
    skill: ["cpp", "java", "python"],
    socials: [{ name:"github" ,link: "github.com" }, { name:"codechef", link: "codechef.com"}],
    projects: [{ name: "github", link: "github.com", description: "nil" }],
    achievements: ["4* on codechef", "leetcoder"],
  });

  return (
    <>
      <div className="App">
        <AttributeForm />
        <header className="AppOutput">
          <OutputWindow data={data} />
        </header>
        <Customizer />
      </div>
    </>
  );
}

export default App;
