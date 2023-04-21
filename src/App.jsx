import React, { useEffect, useState } from "react";
import "./App.css";
import MyTitle from "./components/UI/MyTitle/MyTitle";
import MyButton from "./components/UI/MyButton/MyButton";
import MyInstruction from "./components/UI/MyInstruction/MyInstruction";

function App() {
  const [b, setB] = useState(true);
  const [theme, setTheme] = useState("black theme");
  useEffect(() => {
    const root = document.documentElement;
    if (b) {
      root.style.setProperty("--color", "black");
      root.style.setProperty("--background-color", "white");
      setTheme("white theme");
    } else {
      root.style.setProperty("--color", "white");
      root.style.setProperty("--background-color", "black");
      setTheme("black theme");
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
          {theme}
        </MyButton>
        <MyTitle>Bienvenu</MyTitle>
        <MyInstruction />
      </div>
    </div>
  );
}

export default App;
