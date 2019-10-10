import React, { useState } from "react";
import ReactDOM from "react-dom";
import SideBar from "./side";
import MainB from "./MainB";
import "./styles.css";

function App() {
  const [name, setName] = useState({ name: "" });
  return (
    <div className="toe">
      <div className="side">
        <SideBar name={name.name} change={setName} />
      </div>
      <div className="main">
        <MainB obj={name} />
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
