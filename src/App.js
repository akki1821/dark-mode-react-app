import react, { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState();

  return (
    <div className={dark ? "App dark-mode" : "App"}>
      <div className="nav">
        <label className="switch">
          <input type="checkbox" onChange={() => setDark(!dark)} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="  content">
        <h1>{dark ? "Dark mode is on" : "Light mode is on"}</h1>
        <p>Press Toggle Button to Enable Dark mode...</p>
      </div>
    </div>
  );
}

export default App;
