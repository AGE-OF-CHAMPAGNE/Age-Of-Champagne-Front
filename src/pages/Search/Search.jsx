import React, { useEffect, useState } from "react";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Search.module.css";
import MyCardList from "../../components/MyCardList/MyCardList";
import { COLORS } from "../../constants/constants";
import {
  getAllVintages,
  getVintageCardById,
  searchVintagesByString,
} from "../../services/api/vintage";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";
import { getDistrictById } from "../../services/api/district";
import MySpinner from "../../components/UI/MySpinner/MySpinner";
import MyChoiceButtonList from "../../components/MyChoiceButtonList/MyChoiceButtonList";
import { searchRecipientsByString } from "../../services/api/recipient";
import MyVignobleCardList from "../../components/MyVignobleCardList/MyVignobleCardList";

function Search() {
  const { title, wrapper, search } = classes;
  const [value, setValue] = useState("");
  const [vintages, setVintages] = useState(null);
  const [recipients, setRecipients] = useState(null);
  const [cards, setCards] = useState(null);
  const [list, setList] = useState(null);
  const [activeBtn, setActiveBtn] = useState(1);

  useEffect(() => {
    getAllVintages().then((response) => {
      setVintages(response);
    });
  }, []);

  useEffect(() => {
    if (activeBtn === 1) {
      setVintages(undefined);
      searchVintagesByString(value).then((response) => {
        setVintages(response);
      });
    }
    if (activeBtn === 0) {
      setRecipients(undefined);
      searchRecipientsByString(value).then((response) => {
        setRecipients(response);
      });
    }
  }, [value, activeBtn]);

  useEffect(() => {
    if (recipients) {
      const cardsArr = recipients.map((recipient) => ({
        id: recipient.id,
        name: recipient.name,
        description: recipient.description,
        data: {
          address: recipient.address,
          city: recipient.city,
          postalCode: recipient.postalCode,
          phoneNumber: recipient.phoneNumber,
        },
        pointOfInterest: [],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      setCards(cardsArr);
    }
  }, [recipients]);

  useEffect(() => {
    const fetchData = async () => {
      if (vintages && vintages.length > 0) {
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
      } else {
        setList(null);
      }
    };
    fetchData();
  }, [vintages]);

  useEffect(() => {
    if (recipients) {
      const cardsArr = recipients.map((recipient) => ({
        id: recipient.id,
        name: recipient.name,
        description: recipient.description,
        data: {
          address: recipient.address,
          city: recipient.city,
          postalCode: recipient.postalCode,
          phoneNumber: recipient.phoneNumber,
        },
        pointOfInterest: [],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
      setCards(cardsArr);
    }
  }, [recipients]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Recherche</MyPageTitle>
      </section>

      <section className="d-flex flex-column align-items-center">
        <div className={wrapper}>
          <input
            className="form-control me-2"
            type="search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            placeholder="Rechercher"
            aria-label="Search"
          />
        </div>
      </section>
      <section className="w-100 d-flex justify-content-around">
        <MyChoiceButtonList
          buttons={[
            {
              id: 0,
              children: "Nos partenaires",
              onClick: () => setActiveBtn(0),
            },
            {
              id: 1,
              children: "Les cartes",
              onClick: () => setActiveBtn(1),
            },
          ]}
          activeDefault={activeBtn}
        />
      </section>
      <section className={search}>
        {list &&
        activeBtn === 1 &&
        vintages &&
        list.length > 0 &&
        vintages.length > 0 ? (
          <div className="d-flex w-100 justify-content-center">
            <MyCardList nameType={2} list={list} />
          </div>
        ) : (
          ""
        )}
        {vintages === undefined ? <MySpinner active /> : ""}
        {vintages && activeBtn === 1 && vintages.length === 0 ? (
          <h2>Désolé, on n&apos;a rien trouvé</h2>
        ) : (
          ""
        )}
        {activeBtn === 0 && cards && cards.length > 0 ? (
          <div className="position-relative w-100">
            <MyVignobleCardList cards={cards} />
          </div>
        ) : (
          ""
        )}
        {activeBtn === 0 && recipients === undefined ? (
          <MySpinner active />
        ) : (
          ""
        )}
        {cards && activeBtn === 0 && cards.length === 0 ? (
          <h2>Désolé, on n&apos;a rien trouvé</h2>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Search;
