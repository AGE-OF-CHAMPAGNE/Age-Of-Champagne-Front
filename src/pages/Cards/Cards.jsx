import React, { useEffect, useState, useContext } from "react";
import classes from "./Cards.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MyCardList from "../../components/MyCardList/MyCardList";
import {
  getAllVintages,
  getVintageById,
  getVintageCardById,
} from "../../services/api/vintage";
import { getDistrictById } from "../../services/api/district";
import MyChoiceButtonList from "../../components/MyChoiceButtonList/MyChoiceButtonList";
import MyMap from "../../components/UI/MyMap/MyMap";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";
import UserContext from "../../contexts/user/index";

function Cards() {
  const { title, wrapper } = classes;
  const [list, setList] = useState(null);
  const [userList, setUserList] = useState(null);
  const [vintages, setVintages] = useState(null);
  const [activeBtn, setActiveBtn] = useState(0);
  const user = useContext(UserContext);

  useEffect(() => {
    getAllVintages().then((response) => {
      setVintages(response);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const fetchData = async () => {
        const { Vintages } = user;
        const updatedUserList = await Promise.all(
          Vintages.map(async (vintage) => {
            const vintageRes = await getVintageById(getIdFromUrl(vintage));
            const district = await getDistrictById(
              getIdFromUrl(vintageRes.district)
            );
            return {
              id: vintageRes.id,
              district: district.name,
              name: vintageRes.name,
              img: {
                src: getVintageCardById(vintageRes.id),
                alt: vintageRes.name,
              },
            };
          })
        );
        setUserList(updatedUserList);
      };
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (vintages) {
        try {
          const updatedList = await Promise.all(
            vintages.map(async ({ id, name, district }) => {
              const disId = getIdFromUrl(district);
              const response = await getDistrictById(disId);
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
            buttons={
              user
                ? [
                    {
                      id: 0,
                      children: "Toutes les cartes",
                      onClick: () => setActiveBtn(0),
                    },
                    {
                      id: 1,
                      children: "Mes cartes",
                      onClick: () => setActiveBtn(1),
                    },
                    {
                      id: 2,
                      children: "Voir carte des régions",
                      onClick: () => setActiveBtn(2),
                    },
                  ]
                : [
                    {
                      id: 0,
                      children: "Toutes les cartes",
                      onClick: () => setActiveBtn(0),
                    },
                    {
                      id: 2,
                      children: "Voir carte des régions",
                      onClick: () => setActiveBtn(2),
                    },
                  ]
            }
            activeDefault={activeBtn}
          />
        </section>
      </main>

      <section className="w-100 d-flex justify-content-center">
        {list && activeBtn === 0 ? <MyCardList nameType={2} list={list} /> : ""}
        {user && activeBtn === 1 ? (
          <MyCardList nameType={2} list={userList} />
        ) : (
          ""
        )}
        {activeBtn === 2 ? <MyMap /> : ""}
      </section>
    </div>
  );
}

export default Cards;
