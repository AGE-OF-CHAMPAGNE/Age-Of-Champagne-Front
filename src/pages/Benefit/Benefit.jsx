import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import classes from "./Benefit.module.css";
import { getVintageByName } from "../../services/api/vintage";
import { getBenefitsByVintageId } from "../../services/api/benefit";
import getIdFromUrl from "../../services/transformers/getIdFromUrl";
import { getRecipientById } from "../../services/api/recipient";
import MyBenefit from "../../components/UI/MyBenefit/MyBenefit";
import MySpinner from "../../components/UI/MySpinner/MySpinner";

function Benefit() {
  const { title, span, spinnerContainer } = classes;
  const { district, vintage } = useParams();
  const [vintageId, setVintageId] = useState(null);
  const [benefits, setBenefits] = useState(null);

  useEffect(() => {
    getVintageByName(vintage).then((response) => {
      setVintageId(response.id.toString());
    });
  }, [district]);

  useEffect(() => {
    if (vintageId) {
      const fetchData = async () => {
        const response = await getBenefitsByVintageId(vintageId);
        setBenefits(undefined);
        const data = await Promise.all(
          response.map(async (benefit) => {
            const recipient = await getRecipientById(
              getIdFromUrl(benefit.recipient)
            );
            return {
              id: benefit.id,
              name: recipient.name,
              title: benefit.title,
              description: benefit.description,
              users: benefit.users,
            };
          })
        );
        setBenefits(data);
      };
      fetchData();
    }
  }, [vintageId]);

  return (
    <div className="container pt-3">
      <section className={title}>
        <MyArrow />
        <div className="d-flex flex-column align-items-center w-100">
          <MyPageTitle>{vintage}</MyPageTitle>
          <span className={span}>{district}</span>
        </div>
      </section>
      <section className="d-flex flex-column align-items-center gap-5">
        {benefits
          ? benefits.map((elem) => (
              <MyBenefit
                key={elem.id}
                recipientName={elem.name}
                title={elem.title}
                description={elem.description}
              />
            ))
          : ""}
        {benefits === undefined ? (
          <div className={spinnerContainer}>
            <MySpinner active />
          </div>
        ) : (
          ""
        )}
        {benefits === [] ? (
          <div className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
            Il n&apos;y a aucun avantage, désolé
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default Benefit;
