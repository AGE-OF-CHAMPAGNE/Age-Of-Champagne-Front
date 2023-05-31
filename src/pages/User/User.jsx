import React from "react";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyNavIcon from "../../components/UI/MyNavIcon/MyNavIcon";
import classes from "./User.module.css";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import MyCardsGraphic from "../../components/UI/MyCardsGraphic/MyCardsGraphic";

function User() {
  const { title, wrapper, p, section, img } = classes;
  const imgSettings = {
    src: "/src/assets/img/icons/mdi_gear.png",
    alt: "configuration",
  };
  const graphicData = {
    scaned: 0,
    total: 36,
  };

  return (
    <div className={`container pt-3 ${wrapper}`}>
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Mon compte</MyPageTitle>
        <MyNavIcon
          imgActive={imgSettings}
          imgDisabled={imgSettings}
          to="/settings"
        />
      </section>
      <section className={section}>
        <img
          className={img}
          src="/src/assets/img/icons/avatar.png"
          alt="chien"
        />
        <div className="d-sm-block d-flex flex-column align-items-center">
          <p className={p}>Vous n&apos;avez pas encore de compte</p>
          <MyButtonLink to="/signup" className="text-black">
            S&apos;Inscrire
          </MyButtonLink>
        </div>
      </section>
      <section>
        <MyPageTitle>Mes cartes</MyPageTitle>
        <MyCardsGraphic className data={graphicData} />
      </section>
    </div>
  );
}

export default User;
