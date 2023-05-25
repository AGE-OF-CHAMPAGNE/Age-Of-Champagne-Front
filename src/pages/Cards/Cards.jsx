import React, { useEffect, useState } from "react";
import classes from "./Cards.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyCardList from "../../components/MyCardList/MyCardList";
import { getAllVintages, getVintageCardById } from "../../services/api/vintage";
import { getDistrictById } from "../../services/api/district";
import MyChoiceButtonList from "../../components/MyChoiceButtonList/MyChoiceButtonList";
import MyMap from "../../components/UI/MyMap/MyMap";

function Cards() {
  const { title, wrapper } = classes;
  const [list, setList] = useState(null);
  const [vintages, setVintages] = useState(null);
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    getAllVintages().then((response) => {
      setVintages(response);
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (vintages) {
        try {
          const updatedList = await Promise.all(
            vintages.map(async ({ id, name, district }) => {
              const l = district.split("/");
              const response = await getDistrictById(l[l.length - 1]);
              return {
                id,
                district: response.name,
                name,
                img: { src: getVintageCardById(id), alt: name },
              };
            })
          );
          setList(updatedList);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Error fetching district:", error);
        }
      }
    };
    fetchData();
  }, [vintages]);

  return (
    <div className={`container pt-3 ${wrapper}`}>
      <main>
        <section className={title}>
          <MyArrow />
          <MyPageTitle>Sélectionnez une carte</MyPageTitle>
        </section>
        <section className="w-100 d-flex justify-content-around">
          <MyChoiceButtonList
            buttons={[
              {
                id: 0,
                children: "Toutes les cartes",
                onClick: () => setActiveBtn(0),
              },
              { id: 1, children: "Mes cartes", onClick: () => setActiveBtn(1) },
              {
                id: 2,
                children: "Voir carte des régions",
                onClick: () => setActiveBtn(2),
              },
            ]}
            activeDefault={activeBtn}
          />
        </section>
      </main>

      <section className="w-100 d-flex justify-content-center">
        {list && activeBtn === 0 ? <MyCardList nameType={2} list={list} /> : ""}
        {activeBtn === 2 ? <MyMap /> : ""}
      </section>
    </div>
  );
}

export default Cards;
