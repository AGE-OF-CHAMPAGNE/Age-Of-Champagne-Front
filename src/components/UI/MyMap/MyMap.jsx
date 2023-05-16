import React, { useState, useEffect, useCallback } from "react";
import LazyLoad from "react-lazyload";
import classes from "./MyMap.module.css";
import MySpinner from "../MySpinner/MySpinner";
import MyCardList from "../../MyCardList/MyCardList";
import { getVintagesByDistrictName } from "../../../services/api/vintage";

function MyMap() {
  const [state, setState] = useState(false);
  const [vintageName, setVintageName] = useState(null);
  const [vintages, setVintages] = useState(null);
  const [loadedMap, setLoadedMap] = useState(0);

  const handleImageLoad = useCallback(() => {
    setLoadedMap((prevLoadedMap) => prevLoadedMap + 1);
  }, []);

  useEffect(() => {
    getVintagesByDistrictName(vintageName).then((response) => {
      setVintages(
        response
          ? response.map((elem) => ({
              id: elem.vintage.id,
              img: { src: elem.card, alt: elem.vintage.name },
            }))
          : null
      );
    });
  }, [vintageName]);

  const {
    img,
    MyMap: mymap,
    "dark-bg": darkBg,
    "Cote-de-Sezanne": coteDeSezanne,
    "Cote-de-Sezanne-img": coteDeSezanneImg,
    "Cote-de-Sezanne_active": coteDeSezanneActive,
    region,
    "region-img": regionImg,
    "Cote-des-Bar": CoteDesBar,
    "Cote-des-Bar-img": CoteDesBarImg,
    "Cote-des-Bar_active": CoteDesBarActive,
    "Cote-des-blancs": CoteDesBlancs,
    "Cote-des-blancs-img": CoteDesBlancsImg,
    "Cote-des-blancs_active": CoteDesBlancsActive,
    "Coteaux-vitryats": CoteauxVitryats,
    "Coteaux-vitryats-img": CoteauxVitryatsImg,
    "Coteaux-vitryats_active": CoteauxVitryatsActive,
    "Montagne-de-Reims": MontagneDeReims,
    "Montagne-de-Reims-img": MontagneDeReimsImg,
    "Montagne-de-Reims_active": MontagneDeReimsActive,
    "Vallee-de-la-Marne": ValleeDeLaMarne,
    "Vallee-de-la-Marne-img": ValleeDeLaMarneImg,
    "Vallee-de-la-Marne_active": ValleeDeLaMarneActive,
    list,
  } = classes;
  return (
    <LazyLoad offset={200} once placeholder={<MySpinner active />}>
      <div className={mymap}>
        <img
          src="/src/assets/img/map/Carte_rivières et villes 1.jpg"
          alt="Cartes des régions"
          className={`${img} lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
          onLoad={handleImageLoad}
        />
        <button
          className={`${coteDeSezanne} ${region} ${
            state === "Cote_de_Sezanne_hover" ||
            state === "Cote_de_Sezanne_active"
              ? "z-3"
              : ""
          }`}
          type="button"
          onClick={() => {
            setState(
              state === "Cote_de_Sezanne_active"
                ? false
                : "Cote_de_Sezanne_active"
            );
            setVintageName(
              state === "Cote_de_Sezanne_active" ? false : "Côte de Sézanne"
            );
          }}
          onMouseEnter={() => {
            setState(
              state === "Cote_de_Sezanne_active"
                ? state
                : "Cote_de_Sezanne_hover"
            );
          }}
          onMouseLeave={() =>
            setState(state === "Cote_de_Sezanne_hover" ? false : state)
          }
        >
          <img
            className={`${coteDeSezanneImg} ${regionImg}  ${
              state === "Cote_de_Sezanne_active" ? coteDeSezanneActive : ""
            } lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
            src="/src/assets/img/map/Cote_de_Sezanne.png"
            alt="Cote_de_Sezanne"
            onLoad={handleImageLoad}
          />
        </button>

        <button
          className={`${CoteDesBar} ${region} ${
            state === "Cote_des_Bar_hover" || state === "Cote_des_Bar_active"
              ? "z-3"
              : ""
          }`}
          type="button"
          onClick={() => {
            setState(
              state === "Cote_des_Bar_active" ? false : "Cote_des_Bar_active"
            );
            setVintageName(
              state === "Cote_des_Bar_active" ? false : "Côte des Bar"
            );
          }}
          onMouseEnter={() => {
            setState(
              state === "Cote_des_Bar_active" ? state : "Cote_des_Bar_hover"
            );
          }}
          onMouseLeave={() =>
            setState(state === "Cote_des_Bar_hover" ? false : state)
          }
        >
          <img
            className={`${CoteDesBarImg} ${regionImg} ${
              state === "Cote_des_Bar_active" ? CoteDesBarActive : ""
            } lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
            src="/src/assets/img/map/Cote_des_Bar.png"
            alt="Cote_des_Bar"
            onLoad={handleImageLoad}
          />
        </button>

        <button
          className={`${CoteDesBlancs} ${region} ${
            state === "Cote_des_blancs_hover" ||
            state === "Cote_des_blancs_active"
              ? "z-3"
              : ""
          }`}
          type="button"
          onClick={() => {
            setState(
              state === "Cote_des_blancs_active"
                ? false
                : "Cote_des_blancs_active"
            );
            setVintageName(
              state === "Cote_des_blancs_active" ? false : "Cote des Blancs"
            );
          }}
          onMouseEnter={() => {
            setState(
              state === "Cote_des_blancs_active"
                ? state
                : "Cote_des_blancs_hover"
            );
          }}
          onMouseLeave={() =>
            setState(state === "Cote_des_blancs_hover" ? false : state)
          }
        >
          <img
            className={`${CoteDesBlancsImg} ${regionImg} ${
              state === "Cote_des_blancs_active" ? CoteDesBlancsActive : ""
            } lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
            src="/src/assets/img/map/Cote_des_blancs.png"
            alt="Cote_des_blancs"
            onLoad={handleImageLoad}
          />
        </button>

        <button
          className={`${CoteauxVitryats} ${region} ${
            state === "Coteaux_vitryats_hover" ||
            state === "Coteaux_vitryats_active"
              ? "z-3"
              : ""
          }`}
          type="button"
          onClick={() => {
            setState(
              state === "Coteaux_vitryats_active"
                ? false
                : "Coteaux_vitryats_active"
            );
            setVintageName(
              state === "Coteaux_vitryats_active" ? false : "Côteaux Vitryats"
            );
          }}
          onMouseEnter={() => {
            setState(
              state === "Coteaux_vitryats_active"
                ? state
                : "Coteaux_vitryats_hover"
            );
          }}
          onMouseLeave={() =>
            setState(state === "Coteaux_vitryats_hover" ? false : state)
          }
        >
          <img
            className={`${CoteauxVitryatsImg} ${regionImg} ${
              state === "Coteaux_vitryats_active" ? CoteauxVitryatsActive : ""
            } lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
            src="/src/assets/img/map/Coteaux_vitryats.png"
            alt="Coteaux_vitryats"
            onLoad={handleImageLoad}
          />
        </button>

        <button
          className={`${MontagneDeReims} ${region} ${
            state === "Montagne_de_Reims_hover" ||
            state === "Montagne_de_Reims_active"
              ? "z-3"
              : ""
          }`}
          type="button"
          onClick={() => {
            setState(
              state === "Montagne_de_Reims_active"
                ? false
                : "Montagne_de_Reims_active"
            );
            setVintageName(
              state === "Montagne_de_Reims_active" ? false : "Montagne de Reims"
            );
          }}
          onMouseEnter={() => {
            setState(
              state === "Montagne_de_Reims_active"
                ? state
                : "Montagne_de_Reims_hover"
            );
          }}
          onMouseLeave={() =>
            setState(state === "Montagne_de_Reims_hover" ? false : state)
          }
        >
          <img
            className={`${MontagneDeReimsImg} ${regionImg} ${
              state === "Montagne_de_Reims_active" ? MontagneDeReimsActive : ""
            } lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
            src="/src/assets/img/map/Montagne_de_Reims.png"
            alt="Montagne_de_Reims"
            onLoad={handleImageLoad}
          />
        </button>

        <button
          className={`${ValleeDeLaMarne} ${region} ${
            state === "Vallee_de_la_Marne_hover" ||
            state === "Vallee_de_la_Marne_active"
              ? "z-3"
              : ""
          }`}
          type="button"
          onClick={() => {
            setState(
              state === "Vallee_de_la_Marne_active"
                ? false
                : "Vallee_de_la_Marne_active"
            );
            setVintageName(
              state === "Vallee_de_la_Marne_active"
                ? false
                : "Vallé de la marne"
            );
          }}
          onMouseEnter={() => {
            setState(
              state === "Vallee_de_la_Marne_active"
                ? state
                : "Vallee_de_la_Marne_hover"
            );
          }}
          onMouseLeave={() =>
            setState(state === "Vallee_de_la_Marne_hover" ? false : state)
          }
        >
          <img
            className={`${ValleeDeLaMarneImg} ${regionImg} ${
              state === "Vallee_de_la_Marne_active" ? ValleeDeLaMarneActive : ""
            } lazy-image ${loadedMap === 7 ? "loaded" : ""}`}
            src="/src/assets/img/map/Vallee_de_la_Marne.png"
            alt="Vallee_de_la_Marne"
            onLoad={handleImageLoad}
          />
        </button>

        {vintages ? (
          <MyCardList
            className={`${list} ${
              state && state.slice(-6) === "active" ? "" : "d-none"
            }`}
            color="transparent"
            list={vintages}
          />
        ) : (
          <MySpinner active={state && state.slice(-6) === "active"} />
        )}
      </div>
      <div
        className={`${darkBg} ${state ? "opacity-100 z-2" : "opacity-0 z-n1"}`}
        onClick={() => setState(false)}
        aria-hidden
      />
    </LazyLoad>
  );
}

export default MyMap;
