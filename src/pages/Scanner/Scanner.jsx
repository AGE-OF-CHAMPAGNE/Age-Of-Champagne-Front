import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyQrCodeReader from "../../components/UI/MyQrCodeReader/MyQrCodeReader";
import classes from "./Scanner.module.css";
import MyArrow from "../../components/UI/MyArrow/MyArrow";
import MyPageTitle from "../../components/UI/MyPageTitle/MyPageTitle";
import {
  getVintageByUrlFromQrCode,
  setVintageToAuthorizedUser,
} from "../../services/api/vintage";
import UserContext from "../../contexts/user/index";

function Scanner() {
  const { scanner, title, bg, link, p, wrapper } = classes;
  const user = useContext(UserContext);
  const [vintage, setVintage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (vintage === undefined) {
      alert("Cette carte n'existe pas");
    }
    if (user && vintage) {
      setVintageToAuthorizedUser(user, vintage.id).then((response) => {
        alert(`Vous avez bien scanné la carte ${response.name}`);
      });
    }
  }, [vintage]);

  const handleScan = (url) => {
    if (!user) {
      navigate("/signup");
    } else {
      getVintageByUrlFromQrCode(url).then((response) => {
        const { Vintages } = user;
        if (Vintages.includes(`/api/vintage/${response.id}`)) {
          alert(`Vous avez déja réçu la carte ${response.name}`);
        }
        setVintage(response);
      });
    }
  };
  return (
    <div className={`container pt-3 ${wrapper}`}>
      <section className={title}>
        <MyArrow />
        <MyPageTitle>Scanner un QR-Code</MyPageTitle>
      </section>
      <section className={scanner}>
        <div className={bg}>
          <MyQrCodeReader onNewScanResult={handleScan} />
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
