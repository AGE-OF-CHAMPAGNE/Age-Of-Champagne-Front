import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipientByName } from "../../services/api/recipient";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import MySpinner from "../../components/UI/MySpinner/MySpinner";
import classes from "./Recipient.module.css";
import { getBenefitById } from "../../services/api/benefit";
import MyBenefit from "../../components/UI/MyBenefit/MyBenefit";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";

function Recipient() {
  const { name } = useParams();
  const { title, nameWrapper, titleName, subtitle } = classes;
  const [benefits, setBenefits] = useState(null);
  const [recipient, setRecipient] = useState();

  useEffect(() => {
    getRecipientByName(name).then((response) => {
      setRecipient(response);
    });
  }, []);

  useEffect(() => {
    if (recipient) {
      const arr = recipient.benefits;
      const fetchBenefits = async () => {
        const benefitPromises = arr.map(async (elem) => {
          const id = getIdFromUrl(elem);
          const response = await getBenefitById(id);
          return response;
        });

        const response = await Promise.all(benefitPromises);
        setBenefits(response);
      };

      fetchBenefits();
    }
  }, [recipient]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Sélectionnez un partenaire</MyPageTitle>
      </section>
      <section className="z-1">
        {recipient ? (
          <div className={nameWrapper}>
            <span className={`${titleName} w-100`}>{recipient.name}</span>
            <span className={`${subtitle} w-50`}>Ville: {recipient.city}</span>
            <span className={`${subtitle} w-50 text-end`}>
              Adresse: {recipient.city}
            </span>
            <span className={`${subtitle} w-50`}>
              CP: {recipient.postalCode}
            </span>
            <span className={`${subtitle} w-50 text-end`}>
              Téléphone: {recipient.phoneNumber}
            </span>
          </div>
        ) : (
          <div style={{ height: "354px" }}>
            <MySpinner active text="Chargement de carte" />
          </div>
        )}
      </section>
      <section>
        <MyPageTitle>Les avantages de {name}</MyPageTitle>
        {!benefits ? (
          <div style={{ height: "500px" }}>
            <MySpinner active />
          </div>
        ) : (
          ""
        )}
        {benefits && benefits.length === 0 ? (
          <div
            className="d-flex w-100 justify-content-center align-items-center"
            style={{ height: "350px" }}
          >
            <h2>Désolé, {name} n&apos;a aucun avantage</h2>
          </div>
        ) : (
          ""
        )}
        <div className="d-flex flex-column gap-5 align-items-center pt-3">
          {benefits && benefits.length > 0
            ? benefits.map((elem) => (
                <MyBenefit
                  key={elem.id}
                  recipientName=""
                  startDate={elem.startDate}
                  endDate={elem.startDate}
                  title={elem.title}
                  img={elem.imgs}
                  description={elem.description}
                />
              ))
            : ""}
        </div>
      </section>
    </div>
  );
}

export default Recipient;
