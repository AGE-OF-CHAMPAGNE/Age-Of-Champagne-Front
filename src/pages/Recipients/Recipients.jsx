import React, { useEffect, useState } from "react";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Recipients.module.css";
import { getAllRecipients } from "../../services/api/recipient";
import { COLORS } from "../../constants/constants";
import MyVignobleCardList from "../../components/MyVignobleCardList/MyVignobleCardList";

function Recipients() {
  const { title } = classes;
  const [recipients, setRecipients] = useState(null);
  const [cards, setCards] = useState(null);

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
    getAllRecipients().then((response) => {
      setRecipients(response);
    });
  }, []);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Nos Partenaires</MyPageTitle>
      </section>
      <div className="d-flex pt-3 pb-3">
        {cards ? <MyVignobleCardList cards={cards} /> : ""}
      </div>
    </div>
  );
}

export default Recipients;
