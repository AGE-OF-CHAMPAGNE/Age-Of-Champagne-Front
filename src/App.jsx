import React, { useEffect, useState } from "react";
import "./App.css";
import MyTitle from "./components/UI/MyTitle/MyTitle";
import MyButton from "./components/UI/MyButton/MyButton";
import MyInstruction from "./components/UI/MyInstruction/MyInstruction";
import MySpecificationsList from "./components/MySpecifiationList/MySpecificationsList";

function App() {
  const [b, setB] = useState(true);
  const [theme, setTheme] = useState("black theme");
  const [values, setValues] = useState([194.9, 3.61672123, 48.6167]);
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
        <MySpecificationsList list={values} />
      </div>
    </div>
  );
}

export default App;
