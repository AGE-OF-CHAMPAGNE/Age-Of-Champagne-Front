/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState, useContext } from "react";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyNavIcon from "../../components/UI/MyNavIcon/MyNavIcon";
import classes from "./User.module.css";
import MyButtonLink from "../../components/UI/MyButtonLink/MyButtonLink";
import MyCardsGraphic from "../../components/UI/MyCardsGraphic/MyCardsGraphic";
import UserContext from "../../contexts/user/index";
import { getAllVintages } from "../../services/api/vintage";
import { getBenefitById } from "../../services/api/benefit";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";
import { getRecipientById } from "../../services/api/recipient";
import { getBenefitDateByBenefitId } from "../../services/api/user";
import MyVisitList from "../../components/MyVisitList/MyVisitList";
import MySpinner from "../../components/UI/MySpinner/MySpinner";
import ThemeContext from "../../contexts/theme";

function User() {
  const { title, wrapper, p, section, img, lastname, member, visitWrapper } =
    classes;
  const [imgSettings, setImgSettings] = useState({
    src: "/src/assets/img/icons/gear/light/mdi_gear.png",
    alt: "configuration",
  });
  const [benefits, setBenefits] = useState(null);
  const [graphicData, setGraphicData] = useState({
    scaned: 0,
    total: 0,
  });

  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    setImgSettings({
      src:
        theme === "dark"
          ? "/src/assets/img/icons/gear/light/mdi_gear.png"
          : "/src/assets/img/icons/gear/dark/mdi_gear.png",
      alt: "configuration",
    });
  }, [theme]);

  useEffect(() => {
    if (user) {
      setBenefits(undefined);
      const fetchBenefits = async () => {
        const response = await Promise.all(
          user.used_benefit.map(async (elem) => {
            const idBenefit = getIdFromUrl(elem);
            const benefit = await getBenefitById(idBenefit);
            const idRecipient = getIdFromUrl(benefit.recipient);
            const recipient = await getRecipientById(idRecipient);
            const date = getBenefitDateByBenefitId(
              benefit.id,
              user.used_benefit_date
            );
            return {
              id: benefit.id,
              title: benefit.title,
              description: benefit.description,
              recipient,
              date,
            };
          })
        );
        getAllVintages().then((vintages) => {
          setGraphicData({
            scaned: user.Vintages.length,
            total: vintages.length,
          });
        });
        setBenefits(response);
      };
      fetchBenefits();
    }
  }, [user]);

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
          draggable="false"
          className={img}
          src="/src/assets/img/icons/avatar.png"
          alt="chien"
        />
        <div className="d-sm-block d-flex flex-column align-items-center">
          {user ? (
            <>
              <p className={p}>
                {user.firstname}{" "}
                <span className={lastname}>{user.lastname}</span>
                {user.vintages ? (
                  <img
                    className={member}
                    draggable="false"
                    src="/src/assets/img/icons/member/member.png"
                    alt="membre de AOC"
                  />
                ) : (
                  ""
                )}
              </p>
              <p className={p}>{user.email}</p>
            </>
          ) : (
            <p className={p}>Vous n&apos;avez pas encore de compte</p>
          )}
          {user ? (
            ""
          ) : (
            <MyButtonLink to="/signup" className="text-black">
              S&apos;Inscrire
            </MyButtonLink>
          )}
        </div>
      </section>
      <section>
        <MyPageTitle>Mes cartes</MyPageTitle>
        <MyCardsGraphic data={graphicData} />
      </section>
      {user ? (
        <section className={visitWrapper}>
          <MyPageTitle>Mes derniéres visites</MyPageTitle>
          {benefits && benefits.length > 0 ? (
            <MyVisitList benefits={benefits} />
          ) : (
            ""
          )}
          {benefits && benefits.length === 0 ? (
            <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
              Vous n&apos;avez pas de visites
            </div>
          ) : (
            ""
          )}
          {benefits === undefined ? (
            <div style={{ height: "200px" }}>
              <MySpinner active />
            </div>
          ) : (
            ""
          )}
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default User;
