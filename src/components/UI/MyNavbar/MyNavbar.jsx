import React, {useContext} from "react";
import classes from "./MyNavbar.module.css";
import MyNavIcon from "../MyNavIcon/MyNavIcon";
import ThemeContext from "../../../contexts/theme";

function MyNavbar() {
  const { navbar, links, item, lightNavbar } = classes;
  const theme = useContext(ThemeContext);

  return (
    <nav className={`${navbar} ${theme === "dark" ? "" : lightNavbar}`}>
      <ul className={links} role="menu">
        <li className={item}>
          <MyNavIcon
            to="/cards"
            imgDisabled={{
              src: "/src/assets/img/icons/material-symbols_collections-bookmark-outline.png",
              alt: "tous les cartes",
            }}
            imgActive={{
              src: "/src/assets/img/icons/material-symbols_collections-bookmark-rounded.png",
              alt: "tous les cartes",
            }}
          />
        </li>
        <li className={item}>
          <MyNavIcon
            to="/user"
            imgDisabled={{
              src: "/src/assets/img/icons/mdi_user-circle-outline.png",
              alt: "mon compte",
            }}
            imgActive={{
              src: "/src/assets/img/icons/mdi_user-circle.png",
              alt: "mon compte",
            }}
          />
        </li>
        <li className={item}>
          <MyNavIcon
            to="/"
            imgDisabled={{
              src: "/src/assets/img/icons/mingcute_home-2-line.png",
              alt: "home",
            }}
            imgActive={{
              src: "/src/assets/img/icons/mingcute_home-2-fill.png",
              alt: "home",
            }}
          />
        </li>
        <li className={item}>
          <MyNavIcon
            to="/qrcode"
            imgDisabled={{
              src: "/src/assets/img/icons/mingcute_qrcode-2-line.png",
              alt: "qrcode",
            }}
            imgActive={{
              src: "/src/assets/img/icons/mingcute_qrcode-2-fill.png",
              alt: "qrcode",
            }}
          />
        </li>
        <li className={item}>
          <MyNavIcon
            to="/search"
            imgDisabled={{
              src: "/src/assets/img/icons/ph_magnifying-glass.png",
              alt: "recherche",
            }}
            imgActive={{
              src: "/src/assets/img/icons/ph_magnifying-glass-bold.png",
              alt: "recherche",
            }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default MyNavbar;
