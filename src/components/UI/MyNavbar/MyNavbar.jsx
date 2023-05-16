import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MyNavbar.module.css";

function MyNavbar() {
  const { navbar, links, item } = classes;
  const [active, setActive] = useState(2);

  return (
    <nav className={navbar}>
      <ul className={links} role="menu">
        <li className={item}>
          <button type="button" onClick={() => setActive(0)}>
            <Link to="/cards">
              <img
                className={active === 0 ? "d-none" : ""}
                src="src/assets/img/icons/material-symbols_collections-bookmark-outline.png"
                alt="tous les cartes"
              />
              <img
                className={active === 0 ? "" : "d-none"}
                src="src/assets/img/icons/material-symbols_collections-bookmark-rounded.png"
                alt="tous les cartes"
              />
            </Link>
          </button>
        </li>
        <li className={item}>
          <button type="button" onClick={() => setActive(1)}>
            <Link to="/moncompte">
              <img
                className={active === 1 ? "d-none" : ""}
                src="src/assets/img/icons/mdi_user-circle-outline.png"
                alt="tous les cartes"
              />
              <img
                className={active === 1 ? "" : "d-none"}
                src="src/assets/img/icons/mdi_user-circle.png"
                alt="tous les cartes"
              />
            </Link>
          </button>
        </li>
        <li className={item}>
          <button type="button" onClick={() => setActive(2)}>
            <Link to="/">
              <img
                className={active === 2 ? "d-none" : ""}
                src="src/assets/img/icons/mingcute_home-2-line.png"
                alt="tous les cartes"
              />
              <img
                className={active === 2 ? "" : "d-none"}
                src="src/assets/img/icons/mingcute_home-2-fill.png"
                alt="tous les cartes"
              />
            </Link>
          </button>
        </li>
        <li className={item}>
          <button type="button" onClick={() => setActive(3)}>
            <Link to="/qrcode">
              <img
                className={active === 3 ? "d-none" : ""}
                src="src/assets/img/icons/mingcute_qrcode-2-line.png"
                alt="tous les cartes"
              />
              <img
                className={active === 3 ? "" : "d-none"}
                src="src/assets/img/icons/mingcute_qrcode-2-fill.png"
                alt="tous les cartes"
              />
            </Link>
          </button>
        </li>
        <li className={item}>
          <button type="button" onClick={() => setActive(4)}>
            <Link to="/recherche">
              <img
                className={active === 4 ? "d-none" : ""}
                src="src/assets/img/icons/ph_magnifying-glass.png"
                alt="tous les cartes"
              />
              <img
                className={active === 4 ? "" : "d-none"}
                src="src/assets/img/icons/ph_magnifying-glass-bold.png"
                alt="tous les cartes"
              />
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default MyNavbar;
