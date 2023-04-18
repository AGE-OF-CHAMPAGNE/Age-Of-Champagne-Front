import React, { useEffect, useState } from "react";
import "./App.css";
import MyTitle from "./components/UI/MyTitle/MyTitle";
import MyButton from "./components/UI/MyButton/MyButton.jsx";

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
      <div className="App">
        <MyButton
          onclick={() => {
            setB(!b);
          }}
        >
          Dark or White
        </MyButton>
        <MyTitle>Bienvenu</MyTitle>
      </div>
    </div>
  );
}

export default App;
