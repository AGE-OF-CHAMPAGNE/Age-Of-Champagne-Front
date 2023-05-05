import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MyTitle from "./components/UI/MyTitle/MyTitle";
import MyButton from "./components/UI/MyButton/MyButton";
import MyCardList from "./components/MyCardList/MyCardList";
import MyInstruction from "./components/UI/MyInstruction/MyInstruction";
import MySpecificationsList from "./components/MySpecifiationList/MySpecificationsList";

function App() {
  const [b, setB] = useState(true);
  const [theme, setTheme] = useState("black theme");
  const [values] = useState([194.9, 3.61672123, 48.6167]);

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
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <MyButton onClick={() => setB(!b)}>{theme}</MyButton>
              <MyTitle>Bienvenu</MyTitle>
              <MyInstruction />
              <MyCardList
                list={[
                  {
                    id: 0,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                  {
                    id: 1,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                  {
                    id: 2,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                  {
                    id: 3,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                  {
                    id: 4,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                  {
                    id: 5,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                  {
                    id: 6,
                    img: {
                      src: "/src/assets/img/storybook/BETHON 1.png",
                      alt: "BETHON",
                    },
                  },
                ]}
              />
              <MySpecificationsList list={values} />
            </div>
          }
        />
        <Route path="/cards/:id" element={<div>cards</div>} />
      </Routes>
      <header>menu</header>
    </>
  );
}

export default App;
