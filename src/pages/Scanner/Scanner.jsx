import React from "react";
import { Link } from "react-router-dom";
import MyQrCodeReader from "../../components/UI/MyQrCodeReader/MyQrCodeReader";
import classes from "./Scanner.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";

function Scanner() {
  const { scanner, title, bg, link, p, wrapper } = classes;
  return (
    <div className={`container pt-3 ${wrapper}`}>
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Scanner un QR-Code</MyPageTitle>
      </section>
      <section className={scanner}>
        <div className={bg}>
          <MyQrCodeReader />
        </div>
      </section>
      <section>
        <p className={p}>
          Scannez le QR-code au dos de la carte pour l’ajouter à votre
          collection
        </p>
        <p className={p}>
          Scannez le QR-code de vigneron pour utiliser votre réduction
        </p>
        <Link className={`${link} ${p}`} to="/questions">
          Comment ça marche ?
        </Link>
      </section>
    </div>
  );
}

export default Scanner;
