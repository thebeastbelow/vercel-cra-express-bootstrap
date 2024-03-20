import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const [test, setTest] = useState("TEST");

  useEffect(() => {
    axios.get("/test").then((resp) => {
      setTest(resp.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React: {test}
        </a>
      </header>
    </div>
  );
}

export default App;
