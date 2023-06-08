import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Card.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import { getDistrictByName } from "../../services/api/district";
import {
  getVintageByName,
  getVintageNeighboursById,
  getVintageCardById,
} from "../../services/api/vintage";
import MySpinningCard from "../../components/UI/MySpinningCard/MySpinningCard";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyHelpClassification from "../../components/UI/MyHelpClassification/MyHelpClassification";
import MySpecificationList from "../../components/MySpecifiationList/MySpecificationsList";
import MyGrapesVarietiesList from "../../components/MyGrapesVarietiesList/MyGrapesVarietiesList";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import MyNextButton from "../../components/UI/MyNextButton/MyNextButton";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";
import MySpinner from "../../components/UI/MySpinner/MySpinner";

function Card() {
  const { district, vintage } = useParams();
  const {
    title,
    "vintage-name": vintageName,
    "district-name": districtName,
    "name-wrapper": nameWrapper,
    "location-btn": locationBtn,
    line,
    "class-wrapper": classWrapper,
    classification,
    subtitle,
    active,
    btn,
    next,
    prev,
    disabled,
  } = classes;
  const [color, setColor] = useState(null);
  const [vintageId, setVintageId] = useState(null);
  const [img, setImg] = useState(null);
  const [myCard, setMyCard] = useState(null);
  const [vintageType, setVintageType] = useState(null);
  const [spList, setSpList] = useState(null);
  const [grapeList, setGrapeList] = useState(null);
  const [prevCard, setPrevCard] = useState(null);
  const [nextCard, setNextCard] = useState(null);
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (vintageId) {
      getVintageNeighboursById(vintageId).then((response) => {
        setPrevCard(
          response && response.prev
            ? `/cards/${response.prev.district.name}/${response.prev.vintage.name}`
            : null
        );
        setNextCard(
          response && response.next
            ? `/cards/${response.next.district.name}/${response.next.vintage.name}`
            : null
        );
      });
    }
    setImg(getVintageCardById(vintageId));
  }, [vintageId]);

  useEffect(() => {
    getVintageByName(vintage).then((response) => {
      setCoords({
        lat: response.latitude,
        lng: response.longitude,
      });
      setVintageId(response.id);
      setSpList([
        {
          title: "Superficie (ha)",
          number: response.size,
          color: `rgb(0, 0, 0, 0.2)`,
        },
        {
          title: "Longitude",
          number: response.longitude,
          color: `rgb(0, 0, 0, 0.2)`,
        },
        {
          title: "Latitude",
          number: response.latitude,
          color: `rgb(0, 0, 0, 0.2)`,
        },
      ]);
      setGrapeList([
        {
          title: "Chardonnay",
          imgPath: "/src/assets/img/icons/goldGrape.png",
          color: "250,189,40",
          number: response.chardonnay,
        },
        {
          title: "Meunier",
          imgPath: "/src/assets/img/icons/purpleGrape.png",
          color: "54,124,192",
          number: response.meunier,
        },
        {
          title: "Pinot Noir",
          imgPath: "/src/assets/img/icons/blackGrape.png",
          color: "115, 115, 215",
          number: response.pinot_noir,
        },
      ]);
      const id = getIdFromUrl(response.vintage_type);
      setVintageType(id);
    });
  }, [vintage]);

  useEffect(() => {
    district.replace("%20", " ");
    getDistrictByName(district).then(({ color_code: colorCode }) => {
      setColor(colorCode);
    });
  }, [district]);

  useEffect(() => {
    if (color && vintage && img) {
      setMyCard({
        color,
        data: { img: { src: img, alt: vintage } },
      });
    }
  }, [color, img]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Sélectionnez une carte</MyPageTitle>
      </section>
      <section className="z-1">
        {myCard ? (
          <MySpinningCard color={myCard.color} mycard={myCard.data} />
        ) : (
          <div style={{ height: "354px" }}>
            <MySpinner active text="Chargement de carte" />
          </div>
        )}
      </section>
      <section className="d-flex justify-content-between align-items-center">
        <div className={nameWrapper}>
          <span className={vintageName}>{vintage}</span>
          <span className={districtName}>{district}</span>
        </div>
        <MyButton
          onClick={() => {
            const url = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
            window.open(url, "_blank");
          }}
          color="rgba(0, 0, 0, 0.2)"
          className={locationBtn}
        >
          Emplacement
        </MyButton>
      </section>
      <section>
        <span className={subtitle}>Classification</span>
        <div className={classWrapper}>
          <span
            className={`${classification} ${vintageType === "1" ? active : ""}`}
          >
            Grand Cru
          </span>
          <span className={line} />
          <span
            className={`${classification} ${vintageType === "2" ? active : ""}`}
          >
            1<sup>er</sup> Cru
          </span>
          <MyHelpClassification content="La classification des crus se réfère à la classification des vins en fonction de leur qualité, de leur origine géographique ou de leur style de production." />
        </div>
      </section>
      <section>
        <span className={subtitle}>Spécifications</span>
        {spList ? <MySpecificationList list={spList} /> : ""}
      </section>
      <section>
        <span className={subtitle}>Répartition De Cépage</span>
        {grapeList ? <MyGrapesVarietiesList list={grapeList} /> : ""}
      </section>
      <section className="pt-3 pb-3 z-3">
        <MyNextButton
          className={`${prev} ${prevCard ? "" : disabled}`}
          disabled={!prevCard}
          onClick={() => setMyCard(null)}
          to={prevCard}
          color={color}
        />
        <MyButtonLink color={color} className={btn} to="/">
          En Savoir +
        </MyButtonLink>
        <MyNextButton
          className={`${next} ${nextCard ? "" : disabled}`}
          disabled={!nextCard}
          onClick={() => setMyCard(null)}
          to={nextCard}
          color={color}
        />
      </section>
    </div>
  );
}

export default Card;
