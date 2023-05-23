import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Card.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import { getDistrictByName } from "../../services/api/district";
import {
  getVintageByName,
  getVintageCardById,
} from "../../services/api/vintage";
import MySpinningCard from "../../components/UI/MySpinningCard/MySpinningCard";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyHelpClassification from "../../components/UI/MyHelpClassification/MyHelpClassification";
import MySpecificationList from "../../components/MySpecifiationList/MySpecificationsList";
import MyGrapesVarietiesList from "../../components/MyGrapesVarietiesList/MyGrapesVarietiesList";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import MyNextButton from "../../components/UI/MyNextButton/MyNextButton";

function Card() {
  const { district, vintage } = useParams();
  const {
    "page-name": pageName,
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
  } = classes;
  const [color, setColor] = useState("#FFFFFF");
  const [vintageId, setVintageId] = useState(null);
  const [img, setImg] = useState("");
  const [vintageType, setVintageType] = useState(null);
  const [spList, setSpList] = useState([0.0, 0.0, 0.0]);

  useEffect(() => {
    getVintageByName(vintage).then((response) => {
      setVintageId(response.id);
      setSpList([response.size, response.longitude, response.latitude]);
      const arr = response.vintage_type.split("/");
      setVintageType(arr[arr.length - 1]);
    });
  }, [vintage]);

  useEffect(() => {
    setImg(getVintageCardById(vintageId));
  }, [vintageId]);

  useEffect(() => {
    district.replace("%20", " ");
    getDistrictByName(district).then(({ color_code: colorCode }) => {
      setColor(`#${colorCode}`);
    });
  }, [district]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle className={pageName}>Sélectionnez une carte</MyPageTitle>
      </section>
      <section className="z-1">
        <MySpinningCard
          color={color}
          mycard={{ img: { src: img, alt: vintage } }}
        />
      </section>
      <section className="d-flex justify-content-between align-items-center">
        <div className={nameWrapper}>
          <span className={vintageName}>{vintage}</span>
          <span className={districtName}>{district}</span>
        </div>
        <MyButton color="rgba(255, 255, 255, 0.2)" className={locationBtn}>
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
        {/*  <MySpecificationList list={spList} /> */}
        <MySpecificationList list={[2.2, 2.2, 2.2]} />
      </section>
      <section>
        <span className={subtitle}>Répartition De Cépage</span>
        <MyGrapesVarietiesList />
      </section>
      <section className="pt-3 pb-3">
        <MyNextButton className={prev} to="/" color={color} />
        <MyButtonLink color={color} className={btn} to="/">
          En Savoir +
        </MyButtonLink>
        <MyNextButton className={next} to="/" color={color} />
      </section>
    </div>
  );
}

export default Card;
