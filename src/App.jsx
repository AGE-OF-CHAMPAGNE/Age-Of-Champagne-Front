import React, { useEffect, useState } from "react";
import "./App.css";
import MyTitle from "./components/UI/MyTitle/MyTitle";

function App() {
  const [b, setB] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (b) {
      root.style.setProperty("--color", "black");
    } else {
      root.style.setProperty("--color", "white");
    }
  }, [b]);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setB(!b);
        }}
      >
        {" "}
        COLOR{" "}
      </button>
      <div className="App">
        <MyTitle>Bienvenu</MyTitle>
      </div>
    </div>
  );
}

export default App;
