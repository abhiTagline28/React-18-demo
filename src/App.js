import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [age, setAge] = useState(25);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("Hey..");
    setAge(26);
    setAge(27);
    setAge(28);
    // setAge(29)
    setName("Abh");
    setName("abh@gmail.com");
  }, []);

  // setName("Abh");
  // setName("abh@gmail.com");
  console.log("Hello");

  return (
    <div className="App">
      <div>
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;
