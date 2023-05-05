import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import "./App.css";
import MyTitle from "./components/UI/MyTitle/MyTitle";
import MyButton from "./components/UI/MyButton/MyButton";
import MyCardList from "./components/MyCardList/MyCardList";
import MyInstruction from "./components/UI/MyInstruction/MyInstruction";
import MySpecificationsList from "./components/MySpecifiationList/MySpecificationsList";

function App() {
  const [values] = useState([194.9, 3.61672123, 48.6167]);

  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider value={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <MyButton
                onClick={() => setTheme(theme === "dark" ? "white" : "dark")}
              >
                change
              </MyButton>
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
    </ThemeProvider>
  );
}

export default App;
