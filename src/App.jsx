import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Layout from "./components/Layout/Layout";
import Card from "./pages/Card/Card";
import Scanner from "./pages/Scanner/Scanner";
import Cards from "./pages/Cards/Cards";
import User from "./pages/User/User";
import SignUp from "./pages/SignUp/SignUp";
import Settings from "./pages/Settings/Settings";
import Benefit from "./pages/Benefit/Benefit";
import Search from "./pages/Search/Search";
import Provider from "./contexts/Provider";
import MySpinner from "./components/UI/MySpinner/MySpinner";
import Recipients from "./pages/Recipients/Recipients";
import Recipient from "./pages/Recipient/Recipient";
import Questions from "./pages/Questions/Questions";

function App() {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState(
    "On étale les cartes et on se prépare à l'aventure..."
  );
  const phrases = [
    "On étale les cartes et on se prépare à l'aventure...",
    "On rassemble des amis pour une partie épique...",
    "On prépare le plateau de jeu et place les pions à leur position...",
    "On compte les points et planifie stratégiquement le prochain coup...",
    "On vérifie les dés pour la chance et on se prépare à les lancer...",
    "On place les pions sur le terrain et développe une stratégie...",
    "On trouve un endroit approprié pour jouer et crée une atmosphère...",
    "On mélange le paquet de cartes et attend le début d'une partie captivante...",
    "On place les pions sur la ligne de départ et se prépare pour une course grandiose...",
    "On examine le plateau de jeu et planifie nos mouvements...",
  ];
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        setText(phrases[randomIndex]);
      }, 4000);
    }
  }, [text, loading]);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          <MySpinner active text={text} />
        </div>
      ) : (
        <Provider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cards/:district/:vintage" element={<Card />} />
              <Route path="qrcode" element={<Scanner />} />
              <Route path="cards" element={<Cards />} />
              <Route path="user" element={<User />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="settings" element={<Settings />} />
              <Route path="benefit/:district/:vintage" element={<Benefit />} />
              <Route path="search" element={<Search />} />
              <Route path="recipients" element={<Recipients />} />
              <Route path="recipients/:name" element={<Recipient />} />
              <Route path="questions" element={<Questions />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Provider>
      )}
    </div>
  );
}
export default App;
